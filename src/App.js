import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { publicRoutes, adminRoutes } from "./routes/routes";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import { SidebarProvider } from "./context/SidebarContext";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />        
            {publicRoutes.map((item, index) => {
              const Page = item.component;
              return <Route key={index} path={item.path} element={<Page />} />;
            })}
            
          <Route element={<HomeLayout />}>
            {adminRoutes.map((item, index) => {
              const Page = item.component;
              return <Route key={index} path={item.path} element={<Page />} />;
            })}
          </Route>
        </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </div>
  );
}
