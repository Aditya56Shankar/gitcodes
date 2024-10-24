import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// Define a type for a User object
interface User {
  id: number;
  name: string;
  email: string;
  batch: string;
  status: string;
  lastLogin: string;
}

// Define a type for selected user with optional fields
interface SelectedUser {
  id: string;
  name: string;
  email: string;
  batch: string;
  status: string;
  lastLogin: string;
}

const initialUsers: User[] = [
  { id: 1, name: "aditya shankar", email: "adityashankar608@gmail.com", batch: "2022", status: "active", lastLogin: "21-10-2024" },
  // Add more user data as needed
];

export default function User() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<SelectedUser>({
    id: "",
    name: "",
    email: "",
    batch: "",
    status: "active",
    lastLogin: "",
  });

  const handleAdd = () => {
    if (
      selectedUser.id &&
      selectedUser.name &&
      selectedUser.email &&
      selectedUser.batch &&
      !users.some((user) => user.id === parseInt(selectedUser.id))
    ) {
      setUsers([
        ...users,
        {
          ...selectedUser,
          id: parseInt(selectedUser.id),
          lastLogin: new Date().toISOString().split("T")[0], // Set the last login to today's date
        },
      ]);
      setSelectedUser({
        id: "",
        name: "",
        email: "",
        batch: "",
        status: "active",
        lastLogin: "",
      });
    } else {
      alert("Please fill in all fields or ensure the User ID is unique.");
    }
  };

  const handleDelete = () => {
    setUsers(users.filter((user) => user.id !== Number(selectedUser.id) || user.name !== selectedUser.name));
    setSelectedUser({
      id: "",
      name: "",
      email: "",
      batch: "",
      status: "active",
      lastLogin: "",
    });
  };

  const handleStatusChange = (newStatus: string) => {
    setUsers(
      users.map((user) =>
        user.id === Number(selectedUser.id) && user.name === selectedUser.name
          ? { ...user, status: newStatus }
          : user
      )
    );
    setSelectedUser({
      id: "",
      name: "",
      email: "",
      batch: "",
      status: "active",
      lastLogin: "",
    });
  };



  return (
    <>
      <Header />
      <div className="mt-24 h-24 justify-center text-xl text-white flex capitalize flex-row gap-32">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center justify-center hover:text-blue-600 hover:scale-125 transition-all w-40 h-10 duration-200 bg-green-500">
              Delete User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete User</DialogTitle>
              <DialogDescription>
                Enter the User ID and Name to delete the user.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right">
                  User ID
                </Label>
                <Input
                  id="id"
                  value={selectedUser.id}
                  onChange={(e) => setSelectedUser({ ...selectedUser, id: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleDelete} className="bg-green-500">
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center justify-center hover:text-blue-600 hover:scale-125 transition-all w-40 h-10 duration-200 bg-green-500">
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
              <DialogDescription>
                Enter the details to add a new user.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right">
                  User ID
                </Label>
                <Input
                  id="id"
                  value={selectedUser.id}
                  onChange={(e) => setSelectedUser({ ...selectedUser, id: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={selectedUser.email}
                  onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="batch" className="text-right">
                  Batch
                </Label>
                <Input
                  id="batch"
                  value={selectedUser.batch}
                  onChange={(e) => setSelectedUser({ ...selectedUser, batch: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAdd} className="bg-green-500">
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center justify-center hover:text-blue-600 hover:scale-125 transition-all w-40 h-10 duration-200 bg-green-500">
              Deactivate User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Deactivate User</DialogTitle>
              <DialogDescription>
                Enter the User ID and Name to deactivate the user.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right">
                  User ID
                </Label>
                <Input
                  id="id"
                  value={selectedUser.id}
                  onChange={(e) => setSelectedUser({ ...selectedUser, id: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => handleStatusChange("inactive")} className="bg-green-500">
                Deactivate
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center justify-center hover:text-blue-600 hover:scale-125 transition-all w-40 h-10 duration-200 bg-green-500">
              Activate User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Activate User</DialogTitle>
              <DialogDescription>
                Enter the User ID and Name to activate the user.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right">
                  User ID
                </Label>
                <Input
                  id="id"
                  value={selectedUser.id}
                  onChange={(e) => setSelectedUser({ ...selectedUser, id: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => handleStatusChange("active")} className="bg-green-500">
                Activate
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table className="mt-4">
        <TableCaption>A list of your admin users.</TableCaption>
        <TableHeader className="bg-green-500">
          <TableRow className="text-white">
            <TableHead className="w-[100px] text-white">User ID</TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Batch</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Last login</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.batch}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.lastLogin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Footer />
    </>
  );
}
