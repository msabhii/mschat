import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dashboardData } from "../../Components/Constants/SampleData";
import AdminLayout from "../../Components/LayOut/AdminLayout";
import Table from "../../Components/Shared/Table";
import { transformImage } from "../../lib/Features";
import Stack from "@mui/material/Stack";
import AvatarCard from "../../Components/Shared/AvatarCard";
//! ---------------------Import Statments------------------------------------

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "sender",
    headerName: "Sender",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      <Stack>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>;
    },
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 200,
    renderCell: () => <AvatarCard max={100} avatar={param.row.members} />,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 0,
    renderCell: () => <AvatarCard />,
  },
  {
    field: "totalmessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "creator",
    headerName: "Creator",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Avatar alt={params.row.creator.name} src={param.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: i.avatar.map((i) => transformImage(i, 50)),
      }))
    );
  }, []);

  return (
    <div>
      <AdminLayout>
        <Table heading={"All Chats"} columns={columns} rows={rows} />
      </AdminLayout>
    </div>
  );
};

export default ChatManagement;
