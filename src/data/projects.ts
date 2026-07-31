export interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	url?: string;
	repo?: string;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		slug: "proyecto-uno",
		title: "Nombre del proyecto 1",
		description:
			"Descripción breve del proyecto: qué problema resuelve, qué hiciste y qué resultado tuvo.",
		tags: ["Astro", "TypeScript"],
		url: "https://example.com",
		repo: "https://github.com/tu-usuario/proyecto-uno",
		featured: true,
	},
	{
		slug: "proyecto-dos",
		title: "Nombre del proyecto 2",
		description:
			"Descripción breve del proyecto: qué problema resuelve, qué hiciste y qué resultado tuvo.",
		tags: ["React", "Node.js"],
		url: "https://example.com",
		repo: "https://github.com/tu-usuario/proyecto-dos",
		featured: true,
	},
	{
		slug: "proyecto-tres",
		title: "Nombre del proyecto 3",
		description:
			"Descripción breve del proyecto: qué problema resuelve, qué hiciste y qué resultado tuvo.",
		tags: ["Python", "Data"],
		repo: "https://github.com/tu-usuario/proyecto-tres",
		featured: false,
	},
];
