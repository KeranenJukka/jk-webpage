export type SkillContent = {
    title: string,
    content: string,
}

export type CVContent = {
    title: string,
    year: string,
    jobTitle: string,
    description: string,
}

export type NavigationMenuContent = {
    frontPage: string,
    me: string,
    skills: string,
    cv: string,
    interests: string,
    contact: string,
}

export type ContactContent = {
    email: string,
    phone: string,
    ratingText: string,
}

export type TextContent = {
    navigationMenu: {
        title: '',
        content: NavigationMenuContent,
    },

    me: {
        title: string,
        content: string,
    },

    skills: {
        title: string,
        content: Array<SkillContent>,
    },

    cv: {
        title: string,
        content: Array<CVContent>,
    },

    interests: {
        title: string,
        content: string,
    },

    contact: {
        title: string,
        content: ContactContent,
    }
}

export type TextContentState = {
    value: TextContent,
    selectedLanguage: 'fi' | 'en',
} 