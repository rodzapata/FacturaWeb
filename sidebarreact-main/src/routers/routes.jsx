import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Clientes } from "../pages/Clientes";
import { Estadisticas } from "../pages/Estadisticas";
import { Productos } from "../pages/Productos";
import {Facturas} from "../pages/Facturas";
import {EmitirXml} from "../pages/EmitirXml";
import {Reportes} from "../pages/Reportes";
export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/facturas" element={<Facturas />} />
        <Route path="/EmitirXml" element={<EmitirXml />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    
  );
}
