import React from "react";
import { Navigate } from "react-router-dom";

import HomePage from "@/pages/Home/HomePage";
import LoginPage from "@/pages/Login/LoginPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import AccountsPage from "@/pages/Accounts/AccountsPage";
import TransactionsPage from "@/pages/Transactions/TransactionsPage";
import PaymentTransferPage from "@/pages/PaymentTransfer/PaymentTransferPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

export const routeConfig = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/accounts",
            element: <AccountsPage />,
          },
          {
            path: "/my-banks",
            element: <AccountsPage />,
          },
          {
            path: "/transactions",
            element: <TransactionsPage />,
          },
          {
            path: "/transaction-history",
            element: <TransactionsPage />,
          },
          {
            path: "/payment-transfer",
            element: <PaymentTransferPage />,
          },
        ],
      },
    ],
  },

  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routeConfig;
