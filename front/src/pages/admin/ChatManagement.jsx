import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dashboardData } from "../../Components/Constants/SampleData";
import AdminLayout from "../../Components/LayOut/AdminLayout";
import Table from "../../Components/Shared/Table";
import { transformImage } from "../../lib/Features";
import Stack from "@mui/material/Stack";
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
    width: 220,
  },
  {
    field: "groupchat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <AdminLayout>
        <Table heading={"All Chats"} columns={columns} rows={rows} />
      </AdminLayout>
    </div>
  );
};

export default ChatManagement;
