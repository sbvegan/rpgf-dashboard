import { PageHeader, Typography } from "antd";
const { Paragraph, Text } = Typography

const routes = [
    {
        path: "index",
        breadcrumbName: "Retroactive Public Goods Funding"
    },
    {
        path: "first",
        breadcrumbName: "What is it?"
    }
]

const Home = () => {
    return (
        <>
            <PageHeader 
                title="What is Retroactive Public Goods Funding?"
                breadcrumb={{routes}}
            />
            <hr/>
            <Paragraph style={{fontSize: "16px"}}>
                The core principle behind retroactive public goods 
                funding is that: <Text strong={true}>it's easier to 
                agree on what <Text italic={true}>was</Text> useful 
                than what <Text italic={true}>will</Text> be useful
                </Text>. The Optimism team, in collaboration with 
                Vitalik Buterin have put together a solution to try 
                to sustainably fund public goods and the Optimism 
                team has committed to giving their profits made from 
                sequencing (prior to decentralizing the sequencer) 
                to public goods funding experiments. To learn more 
                about, check out their blog post: https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c
            </Paragraph>

            {/* todo: clean up and write more content */}
        </>
    )
}

export default Home;