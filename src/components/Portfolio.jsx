import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLink, Mail, Linkedin } from 'lucide-react';
import ecommerceImagen from '../assets/ecommerce.jpg.webp';
import scrapingImagen from '../assets/scraping.webp';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Tienda con carrito de compras",
      tags: ["React", "Node.js"],
      // Imagen representativa de un e-commerce
      image: ecommerceImagen,
    },
    {
      title: "Script scraping web",
      description: "Aplicación para recolección de datos y exportarlos en xls. Automatización de extracción de datos web con exportación a Excel.",
      tags: ["Python", "Pandas", "Selenium"],
      // Imagen representativa de análisis de datos/web scraping
      image: scrapingImagen,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Programador Jr</h1>
          <p className="text-xl text-gray-300 mb-8">Construyendo experiencias web excepcionales</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              <Mail className="w-4 h-4 mr-2" />
              Contactar
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              <GithubIcon className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "Node.js", "TypeScript", "Python"].map((skill) => (
              <div key={skill} className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      tag && (
                        <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300 transition-colors">
                          {tag}
                        </span>
                      )
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="hover:bg-gray-100">
                    <GithubIcon className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en trabajar juntos?</h2>
          <p className="text-gray-600 mb-8">
            Estoy abierto a oportunidades de trabajo y colaboraciones en proyectos interesantes.
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
            <Mail className="w-4 h-4 mr-2" />
            Enviar Mensaje
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Cayetano Lupo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
