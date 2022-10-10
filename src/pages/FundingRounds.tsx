import { PageHeader } from "antd";

const routes = [
    {
        path: "index",
        breadcrumbName: "Retroactive Public Goods Funding"
    },
    {
        path: "first",
        breadcrumbName: "Funding Rounds Breakdown"
    }
]

const FundingRounds = () => {
    return (
        <>
            <PageHeader 
                title="Optimism RPGF Funding Rounds" 
                breadcrumb={{routes}} 
            />
        </>
    )
}

export default FundingRounds;