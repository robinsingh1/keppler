import Tooltip from '@/components/tooltip'

export default
{
    name: 'projects-hub',

    components:
    {
        Tooltip
    },

    computed:
    {
        projects()
        {
            return this.$store.state.projects.all
        },

        currentProject()
        {
            return this.$store.state.projects.current
        },

        projectsCount()
        {
            const keys = Object.keys(this.projects)
            return keys.length
        },

        downloadUrl()
        {
            if(!this.currentProject)
            {
                return ''
            }

            return `${this.$store.state.url}/${this.currentProject.slug}/download`
        }
    },

    created()
    {

    },

    methods:
    {
        onProjectClick(projectSlug)
        {
            this.$store.commit('setProject', projectSlug)
        }
    }
}