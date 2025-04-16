import { AngularSvg, DockerSvg, GoLangSvg, JavascriptSvg, MongodbSvg, NestSvg, ReactSvg, SassSvg, TailwindCssSvg, TypescriptSvg, ViteSvg } from '@/components/layout/svg-collection';
import { File, Folder, Tree } from '@/components/magicui/file-tree';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { TextReveal } from '@/components/magicui/text-reveal';

const TopicsCovered = () => {
    return (
        <div className='relative grid grid-cols-1 md:grid-cols-2 px-4 w-full companies' >
            {/* <div> */}
            {/* <TextReveal className='text-4xl p-0'>Learn Any Technology You Dream Of,
                    we deliver nothing but excellence.</TextReveal> */}
            {/* </div> */}
            <div className='flex items-start px-12 gap-2 flex-col justify-center'>
                <h2 className="scroll-m-20 py-5 md:py-0 mt-6 text-3xl font-semibold tracking-tight first:mt-0">
                    50+ Technologies Covered
                </h2>
                <p className='text-muted-foreground'>
                    From foundational web technologies to cutting-edge frameworks, we cover everything you need to become a well-rounded developer. Our comprehensive curriculum includes modern technologies that are in high demand in the industry.
                </p>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center md:mt-[-9rem] lg:mt-0 overflow-hidden">
                <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden'>
                    <OrbitingCircles iconSize={40}>
                        <ReactSvg />
                        <DockerSvg />
                        <SassSvg />
                        {/* <TailwindCssSvg /> */}
                        <TypescriptSvg />
                        <AngularSvg />
                        <MongodbSvg />
                    </OrbitingCircles>
                    <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                        <ViteSvg />
                        <GoLangSvg />
                        <NestSvg />
                        <JavascriptSvg />
                    </OrbitingCircles>
                </div>
                {/* <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
                    <Tree
                        className="overflow-hidden rounded-md bg-background p-2"
                        initialSelectedId="7"
                        initialExpandedItems={[
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                        ]}
                        elements={ELEMENTS}
                    >
                        <Folder element="src" value="1">
                            <Folder value="2" element="app">
                                <File value="3">
                                    <p>layout.tsx</p>
                                </File>
                                <File value="4">
                                    <p>page.tsx</p>
                                </File>
                            </Folder>
                            <Folder value="5" element="components">
                                <Folder value="6" element="ui">
                                    <File value="7">
                                        <p>button.tsx</p>
                                    </File>
                                </Folder>
                                <File value="8">
                                    <p>header.tsx</p>
                                </File>
                                <File value="9">
                                    <p>footer.tsx</p>
                                </File>
                            </Folder>
                            <Folder value="10" element="lib">
                                <File value="11">
                                    <p>utils.ts</p>
                                </File>
                            </Folder>
                        </Folder>
                    </Tree>
                </div>
                <h2 className="scroll-m-20 py-5 md:py-0 mt-6 text-3xl font-semibold tracking-tight first:mt-0">
                    Learn How to Write Clean Neat Code.
                </h2> */}
            </div>
        </div>
    )
}


const ELEMENTS = [
    {
        id: "1",
        isSelectable: true,
        name: "src",
        children: [
            {
                id: "2",
                isSelectable: true,
                name: "app",
                children: [
                    {
                        id: "3",
                        isSelectable: true,
                        name: "layout.tsx",
                    },
                    {
                        id: "4",
                        isSelectable: true,
                        name: "page.tsx",
                    },
                ],
            },
            {
                id: "5",
                isSelectable: true,
                name: "components",
                children: [
                    {
                        id: "6",
                        isSelectable: true,
                        name: "header.tsx",
                    },
                    {
                        id: "7",
                        isSelectable: true,
                        name: "footer.tsx",
                    },
                ],
            },
            {
                id: "8",
                isSelectable: true,
                name: "lib",
                children: [
                    {
                        id: "9",
                        isSelectable: true,
                        name: "utils.ts",
                    },
                ],
            },
        ],
    },
]

export default TopicsCovered