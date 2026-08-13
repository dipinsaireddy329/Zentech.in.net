import React, { useEffect, useState, useMemo } from "react";
import { getProjects } from "../lib/projects";
import { FEATURED_PROJECTS } from "../data/projects";
import { Search, MapPin, Building2, Home, Paintbrush, Compass, Wrench, Layers, X, ArrowRight, Eye, Tag } from "lucide-react";

interface ProjectItem {
  id: string | number;
  title: string;
  category: string;
  location: string;
  description: string;
  image_url?: string;
  heroImage?: string;
  area?: string;
  completionYear?: string;
  client?: string;
  features?: string[];
  summary?: string;
}

export default function Projects() {
  const [projectsList, setProjectsList] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    setLoading(true);
    getProjects()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped: ProjectItem[] = data.map((item: any) => ({
            id: item.id,
            title: item.title,
            category: item.category || 'Construction',
            location: item.location || 'Tirupati, AP',
            description: item.description || item.summary || '',
            image_url: item.image_url || item.heroImage,
            heroImage: item.heroImage || item.image_url,
            area: item.area || 'N/A',
            completionYear: item.completionYear || '2025',
            client: item.client || 'Valued Client',
            features: item.features || [],
            summary: item.summary || item.description
          }));

          // Merge DB items with FEATURED_PROJECTS static items seamlessly
          const merged = [...mapped];
          FEATURED_PROJECTS.forEach(fp => {
            if (!merged.some(m => String(m.id) === String(fp.id))) {
              merged.push({
                id: fp.id,
                title: fp.title,
                category: fp.category,
                location: fp.location,
                description: fp.summary,
                image_url: fp.heroImage,
                heroImage: fp.heroImage,
                area: fp.area,
                completionYear: fp.completionYear,
                client: fp.client,
                features: fp.features,
                summary: fp.summary
              });
            }
          });
          setProjectsList(merged);
        } else {
          // Fallback to static featured projects
          setProjectsList(FEATURED_PROJECTS.map(fp => ({
            id: fp.id,
            title: fp.title,
            category: fp.category,
            location: fp.location,
            description: fp.summary,
            image_url: fp.heroImage,
            heroImage: fp.heroImage,
            area: fp.area,
            completionYear: fp.completionYear,
            client: fp.client,
            features: fp.features,
            summary: fp.summary
          })));
        }
      })
      .catch((err) => {
        console.warn("Using static featured projects fallback:", err);
        setProjectsList(FEATURED_PROJECTS.map(fp => ({
          id: fp.id,
          title: fp.title,
          category: fp.category,
          location: fp.location,
          description: fp.summary,
          image_url: fp.heroImage,
          heroImage: fp.heroImage,
          area: fp.area,
          completionYear: fp.completionYear,
          client: fp.client,
          features: fp.features,
          summary: fp.summary
        })));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const categories = [
    { id: "All", label: "All Projects", icon: Layers },
    { id: "Residential", label: "Residential", icon: Home },
    { id: "Commercial", label: "Commercial", icon: Building2 },
    { id: "Interior", label: "Interior", icon: Paintbrush },
    { id: "Architecture", label: "Architecture", icon: Compass },
    { id: "Renovation", label: "Renovation", icon: Wrench },
  ];

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projectsList.length };
    categories.forEach(c => {
      if (c.id === 'All') return;
      counts[c.id] = projectsList.filter(p => p.category.toLowerCase().includes(c.id.toLowerCase())).length;
    });
    return counts;
  }, [projectsList]);

  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      // Category Filter
      let matchesCat = true;
      if (activeCategory !== "All") {
        matchesCat = project.category.toLowerCase().includes(activeCategory.toLowerCase());
      }

      // Search Filter
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query);
      }

      return matchesCat && matchesSearch;
    });
  }, [projectsList, activeCategory, searchQuery]);

  if (loading) {
    return (
      <div className="py-20 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-amber-500 border-t-transparent mb-4"></div>
        <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">Loading Zentech Project Portfolio...</p>
      </div>
    );
  }

  return (
    <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#EA580C] uppercase tracking-widest">
          <Building2 className="w-3.5 h-3.5" />
          <span>PORTFOLIO EXHIBIT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight">
          OUR EXECUTED PROJECTS
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm">
          Filter through our residential villas, commercial landmarks, turn-key interiors, and architectural restorations built across Tirupati and Andhra Pradesh.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const count = categoryCounts[cat.id] || 0;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#F97316] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span
                  className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600 p-0.5 rounded-full cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Meta */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-6">
        <span>
          Found <strong className="text-slate-900 font-bold">{filteredProjects.length}</strong> projects
          {activeCategory !== "All" && (
            <span> in <strong className="text-[#EA580C] uppercase">{activeCategory}</strong></span>
          )}
        </span>
        {(activeCategory !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="text-[#EA580C] hover:underline font-bold cursor-pointer"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No Matching Projects Found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We couldn't find any projects matching your current category filter or search query.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-[#F97316] text-white rounded-lg text-xs font-bold uppercase cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-200 hover:border-[#F97316] transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={
                    project.heroImage ||
                    project.image_url ||
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 border border-slate-700/80 uppercase">
                  {project.category}
                </div>

                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Eye className="w-4 h-4 text-[#F97316]" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center space-x-1.5 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F97316] transition-colors uppercase tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                    {project.description || project.summary}
                  </p>
                </div>

                {project.area && (
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Built-up: <strong className="text-slate-800 font-bold">{project.area}</strong></span>
                    <span className="text-[#EA580C] font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
          <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-2xl p-6 relative text-slate-900 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
              <img
                src={selectedProject.heroImage || selectedProject.image_url}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] bg-[#F97316] text-white px-2.5 py-0.5 rounded font-mono uppercase font-bold tracking-widest">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                <span className="font-bold text-slate-800">{selectedProject.location}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Area / Size</span>
                <span className="font-bold text-slate-800">{selectedProject.area || 'N/A'}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Completion</span>
                <span className="font-bold text-slate-800">{selectedProject.completionYear || '2025'}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Overview & Scope</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {selectedProject.summary || selectedProject.description}
              </p>
            </div>

            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Key Engineering Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                      <Tag className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


