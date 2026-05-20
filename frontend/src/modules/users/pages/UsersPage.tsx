"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table } from '@/components/ui/Table';
import { Dropdown } from '@/components/ui/Dropdown';

import { Modal } from '@/components/ui/Modal';
import { Header } from '@/components/layout/Header';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/Pagination';
import { Badge } from '@/components/ui/Badge';
import { Tooltip } from '@/components/ui/Tooltip';
import { Users, ShieldCheck, Search, Plus, Edit, Trash2, Filter, Eye, EyeOff, UserCheck, Database, User as UserIcon, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/context/ToastContext';
import { publicUrl } from '@/lib/utils';

interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "QA";
  status: "Activo" | "Inactivo";
  lastAccess: string;
}

export const UsersPage = () => {
  // Estado para la lista de usuarios
  const [usersList, setUsersList] = useState<User[]>([
    { id: 1, name: "Admin User", email: "admin@designengine.com", role: "Admin", status: "Activo", lastAccess: "Hoy, 10:30 AM" },
    { id: 2, name: "QA Tester", email: "qa@designengine.com", role: "QA", status: "Activo", lastAccess: "Ayer, 03:15 PM" },
    { id: 3, name: "Carlos Ruiz", email: "carlos@mail.com", role: "Admin", status: "Inactivo", lastAccess: "Hace 2 días" },
    { id: 4, name: "Ana Belén", email: "ana@mail.com", role: "QA", status: "Activo", lastAccess: "Hoy, 09:00 AM" },
    { id: 5, name: "Roberto Gómez", email: "roberto@mail.com", role: "QA", status: "Activo", lastAccess: "Hace 1 hora" },
    { id: 6, name: "Juan Silva", email: "juan@mail.com", role: "Admin", status: "Inactivo", lastAccess: "Hace 3 días" },
    { id: 7, name: "Diana Torres", email: "diana@mail.com", role: "QA", status: "Activo", lastAccess: "Ayer" },
    { id: 8, name: "Luis Méndez", email: "luis@mail.com", role: "Admin", status: "Inactivo", lastAccess: "Nunca" },
    { id: 9, name: "Laura Rodríguez", email: "laura@mail.com", role: "Admin", status: "Inactivo", lastAccess: "Nunca" },
    { id: 10, name: "Pedro Sánchez", email: "pedro@mail.com", role: "Admin", status: "Inactivo", lastAccess: "Nunca" },
    { id: 11, name: "María González", email: "maria@mail.com", role: "Admin", status: "Inactivo", lastAccess: "Nunca" },
    { id: 12, name: "José Martínez", email: "jose@mail.com", role: "QA", status: "Activo", lastAccess: "Hoy" },
  ]);

  // Estado para filtros
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Estado para la modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isConfirmSaveModalOpen, setIsConfirmSaveModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const { show: showToast } = useToast();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "QA" as "Admin" | "QA",
    status: "Activo" as "Activo" | "Inactivo"
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [hasHadError, setHasHadError] = useState<{ email?: boolean; name?: boolean }>({});

  // Handlers
  const handleOpenCreate = () => {
    setEditingUser(null);
    setFormData({ name: "", email: "", password: "", role: "QA", status: "Activo" });
    setErrors({ name: "", email: "", password: "" });
    setHasHadError({});
    setShowPassword(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: "", // Normalmente no se precarga la contraseña
      role: user.role,
      status: user.status as "Activo" | "Inactivo"
    });
    setErrors({ name: "", email: "", password: "" });
    setHasHadError({});
    setShowPassword(false);
    setIsModalOpen(true);
  };

  const handleOpenDelete = (id: number) => {
    setUserToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (userToDelete !== null) {
      setIsDeleteModalOpen(false);
      setIsDeleting(true);

      setTimeout(() => {
        setUsersList(prev => prev.filter(u => u.id !== userToDelete));
        setIsDeleting(false);
        setUserToDelete(null);

        showToast({
          title: "Usuario eliminado",
          description: "El usuario ha sido eliminado correctamente del sistema.",
          variant: "success"
        });
      }, 1000);
    }
  };

  const validateName = (val: string) => {
    if (!val.trim()) return "El nombre es obligatorio";
    if (/\d/.test(val)) return "El nombre no puede contener números";
    return "";
  };

  const validateEmail = (val: string) => {
    if (!val.trim()) return "El correo es obligatorio";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Formato de correo inválido";
    return "";
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "" };
    let isValid = true;

    const nameError = validateName(formData.name);
    if (nameError) {
      newErrors.name = nameError;
      isValid = false;
      setHasHadError((prev) => ({ ...prev, name: true }));
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
      setHasHadError((prev) => ({ ...prev, email: true }));
    }

    if (!editingUser && !formData.password) {
      newErrors.password = "La contraseña es obligatoria";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (!validateForm()) return;
    setIsConfirmSaveModalOpen(true);
  };

  const confirmSave = () => {
    if (editingUser) {
      // Editar
      setUsersList(prev => prev.map(u =>
        u.id === editingUser.id
          ? { ...u, name: formData.name, email: formData.email, role: formData.role, status: formData.status }
          : u
      ));

      showToast({
        title: "Usuario actualizado",
        description: `Los datos de ${formData.name} han sido actualizados con éxito.`,
        variant: "success"
      });
    } else {
      // Crear
      const newUser: User = {
        id: Math.max(...usersList.map(u => u.id), 0) + 1,
        name: formData.name,
        email: formData.email,
        role: formData.role,
        status: formData.status,
        lastAccess: "Recién creado"
      };
      setUsersList(prev => [...prev, newUser]);

      showToast({
        title: "Usuario creado",
        description: `El usuario ${formData.name} ha sido registrado con éxito.`,
        variant: "success"
      });
    }
    setIsConfirmSaveModalOpen(false);
    setIsModalOpen(false);
  };

  // Lógica de filtrado y preparación de datos para la tabla
  const filteredUsers = useMemo(() => {
    return usersList.filter(user => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [usersList, search, roleFilter]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const tableData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE).map(user => ({
      ...user,
      nameColumn: (
        <div className="flex items-center gap-3">
          <Avatar name={user.name} size="sm" />
          <span className="font-medium text-neutral-900">{user.name}</span>
        </div>
      ),
      state: (
        <Badge
          category={user.status === "Activo" ? "success" : "neutral"}
          mode="solid"
          size="md"
          icon={user.status === "Activo" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
        >
          {user.status}
        </Badge>
      ),
      actions: (
        <div className="flex gap-2">
          <Tooltip content="Editar usuario">
            <Button
              variant="ghost"
              className="p-2 h-auto text-neutral-500"
              onClick={() => handleOpenEdit(user)}
            >
              <Edit className="w-4 h-4" />
            </Button>
          </Tooltip>
          <Tooltip content="Eliminar usuario">
            <Button
              variant="ghost"
              className="p-2 h-auto text-error-500"
              onClick={() => handleOpenDelete(user.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </Tooltip>
        </div>
      )
    }));
  }, [filteredUsers, currentPage]);

  // Resetear página al filtrar
  useEffect(() => {
    setCurrentPage(1);
  }, [search, roleFilter]);

  // Stats
  const totalCount = usersList.length;
  const activeCount = usersList.filter(u => u.status === "Activo").length;
  const adminCount = usersList.filter(u => u.role === "Admin").length;
  const qaCount = usersList.filter(u => u.role === "QA").length;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto bg-neutral-50 text-neutral-900">
        <div className="flex flex-col gap-6 p-8 min-h-screen max-w-[1700px] mx-auto">
          {/* Header */}
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Gestión de usuarios</h1>
            <p className="text-neutral-600 font-medium">Administra los accesos y roles de los usuarios del sistema.</p>
          </header>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Total Usuarios"
              description="Usuarios en el sistema"
              icon={<Database className="w-8 h-8 text-primary-500" />}
              className="max-w-none"
            >
              <div className="text-4xl font-bold mt-2 text-primary-500">{totalCount}</div>
            </Card>
            <Card
              title="Usuarios Activos"
              description="Sesiones habilitadas"
              icon={<UserCheck className="w-8 h-8 text-success-500" />}
              className="max-w-none"
            >
              <div className="text-4xl font-bold mt-2 text-success-500">{activeCount}</div>
            </Card>
            <Card
              title="Usuarios Admin"
              description="Total de administradores"
              icon={<ShieldCheck className="w-8 h-8 text-error-500" />}
              className="max-w-none"
            >
              <div className="text-4xl font-bold mt-2 text-error-500">{adminCount}</div>
            </Card>
            <Card
              title="Usuarios QA"
              description="Total de analistas QA"
              icon={<Users className="w-8 h-8 text-info-500" />}
              className="max-w-none"
            >
              <div className="text-4xl font-bold mt-2 text-info-500">{qaCount}</div>
            </Card>
          </section>

          {/* Actions Section */}
          <section className="flex flex-col md:flex-row justify-between items-end gap-4 p-6">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
              <div className="w-full md:w-96">
                <Input
                  placeholder="Buscar usuarios..."
                  iconLeft={<Search className="w-5 h-5" />}
                  sizeVariant="md"
                  className="w-full"
                  label="Filtrar por nombre o email"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="w-full md:w-64">
                <Dropdown
                  className="w-full"
                  label="Filtrar por rol"
                  sizeVariant="md"
                  iconLeft={<Filter className="w-5 h-5" />}
                  options={[
                    { label: "Todos", value: "all" },
                    { label: "Admin", value: "Admin" },
                    { label: "QA", value: "QA" },
                  ]}
                  value={roleFilter}
                  onChange={(value) => setRoleFilter(value)}
                />
              </div>
            </div>
            <Button
              className="w-auto"
              size="md"
              variant="primary"
              onClick={handleOpenCreate}
            >
              <Plus className="w-5 h-5 mr-2" />
              Crear usuario
            </Button>
          </section>

          {/* Table Section */}
          <section className="flex-1">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <Table
                columns={[
                  { key: 'nameColumn', label: 'Nombre' },
                  { key: 'email', label: 'Email' },
                  { key: 'role', label: 'Rol' },
                  { key: 'state', label: 'Estado' },
                  { key: 'lastAccess', label: 'Último acceso' },
                  { key: 'actions', label: 'Acciones' },
                ]}
                data={tableData}
              />
            </div>

            {/* Mobile Cards */}
            <div className="flex flex-col gap-4 md:hidden">
              {tableData.map((user) => (
                <Card key={user.id} showEffect={false} className="shadow-sm max-w-none">
                  <div className="flex flex-col gap-4 -mt-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar name={user.name} />
                        <div>
                          <h3 className="font-bold text-neutral-900 text-sm">{user.name}</h3>
                          <p className="text-xs text-neutral-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {user.status === "Activo" ? <CheckCircle2 className="w-4 h-4 text-success-500" /> : <XCircle className="w-4 h-4 text-neutral-500" />}
                      </div>
                    </div>

                    <div className="h-px bg-neutral-200 w-full" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium px-2.5 py-1">
                        <UserIcon className="w-4 h-4" />
                        <span>{user.role}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          className="p-1.5 h-auto text-neutral-500 rounded-lg hover:text-neutral-600"
                          onClick={() => handleOpenEdit(user as User)}
                        >
                          <Edit className="w-4 h-4 text-neutral-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="p-1.5 h-auto rounded-lg hover:text-error-600"
                          onClick={() => handleOpenDelete(user.id)}
                        >
                          <Trash2 className="w-4 h-4 text-error-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Pagination Section */}
          <section className="flex justify-center py-4">
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => {
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => {
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => {
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>

          {/* Modal de Usuario */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={editingUser ? "Editar usuario" : "Crear nuevo usuario"}
            sizeVariant="M"
            footer={
              <>
                <Button variant="neutral" size="md" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="primary" size="md" onClick={handleSave}>
                  {editingUser ? "Guardar cambios" : "Crear usuario"}
                </Button>
              </>
            }
          >
            <div className="flex flex-col gap-6">
              <Input
                label="Nombre completo"
                placeholder="Ej: Juan Pérez"
                value={formData.name}
                className="w-full"
                sizeVariant="md"
                error={errors.name}
                success={!errors.name && hasHadError.name && formData.name !== ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData({ ...formData, name: val });
                  const err = validateName(val);
                  if (err) setHasHadError((prev) => ({ ...prev, name: true }));
                  setErrors({ ...errors, name: err });
                }}
              />
              <Input
                label="Correo electrónico"
                placeholder="correo@ejemplo.com"
                type="email"
                value={formData.email}
                className="w-full"
                sizeVariant="md"
                error={errors.email}
                success={!errors.email && hasHadError.email && formData.email !== ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData({ ...formData, email: val });
                  const err = validateEmail(val);
                  if (err) setHasHadError((prev) => ({ ...prev, email: true }));
                  setErrors({ ...errors, email: err });
                }}
              />
              <Input
                label="Contraseña"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                className="w-full"
                sizeVariant="md"
                error={errors.password}
                iconRight={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </Button>
                }
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
              />
              <Dropdown
                className="w-full"
                label="Rol"
                value={formData.role}
                options={[
                  { label: "Admin", value: "Admin" },
                  { label: "QA", value: "QA" },
                ]}
                sizeVariant="md"
                onChange={(value) => setFormData({ ...formData, role: value as "Admin" | "QA" })}
              />
            </div>
          </Modal>

          {/* Modal de Confirmación de Eliminación */}
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            title="¿Eliminar usuario?"
            description="Esta acción no se puede deshacer. El usuario perderá el acceso al sistema de forma inmediata."
            state="Warning"
            primaryActionLabel="Eliminar"
            secondaryActionLabel="Cancelar"
            onPrimaryAction={confirmDelete}
            onSecondaryAction={() => setIsDeleteModalOpen(false)}
          />

          {/* Modal de Confirmación de Guardar */}
          <Modal
            isOpen={isConfirmSaveModalOpen}
            onClose={() => setIsConfirmSaveModalOpen(false)}
            title={editingUser ? "¿Confirmar actualización?" : "¿Confirmar creación?"}
            description={editingUser ? `¿Estás seguro que deseas guardar los cambios para el usuario ${formData.name}?` : `¿Estás seguro que deseas crear el usuario ${formData.name} con el rol de ${formData.role}?`}
            state="Info"
            primaryActionLabel="Confirmar"
            secondaryActionLabel="Cancelar"
            onPrimaryAction={confirmSave}
            onSecondaryAction={() => setIsConfirmSaveModalOpen(false)}
          />

          {/* Overlay de Carga */}
          {isDeleting && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="flex flex-col items-center gap-4">
                <img src={publicUrl("/automation.gif")} alt="Cargando..." className="w-48 h-48 rounded-2xl shadow-2xl" />
                <p className="text-white font-bold text-xl tracking-wider">Procesando...</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};



