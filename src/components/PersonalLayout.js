import GlobalLayout from '../components/GlobalLayout'

  
export default function Layout({ children }) {
    return (
        <GlobalLayout 
            title="Creative Playground — Art, Gaming & Journal"
            description="Explore my creative side: digital art, rhythm games, and journaling. Follow my personal journey and feel free to leave feedback or request a commission."
        >
            <main>{children}</main>
        </GlobalLayout>
    )
}