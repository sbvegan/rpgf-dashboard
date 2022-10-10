import { PageHeader } from "antd";


const routes = [
    {
        path: "index",
        breadcrumbName: "Retroactive Public Goods Funding"
    },
    {
        path: "first",
        breadcrumbName: "Analytics Dashboard"
    }
]

const Dashboard = () => {
    return (
        <>
            <PageHeader 
                title="RPGF Analytics Dashboard"  
                breadcrumb={{routes}}
            />

        </>
    )
}

export default Dashboard;