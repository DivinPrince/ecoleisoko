/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/b6Xgn1l7VhW
 */
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import Image from "next/image"
import Video from 'next-video';

export function ProjeEductive() {
    return (
        <div className="bg-white">
            <main className='flex flex-col gap-8 w-full md:w-[700px]'>
                <section>
                    <div className="flex gap-2 mb-2">
                        <img
                            alt="École"
                            height="200"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "1/1",
                                objectFit: "cover",
                            }}
                            width="200"
                            className="max-w-[200px]"
                        />
                        <div className="flex flex-col gap-5">
                            <h2 className="text-3xl font-bold mb-1">Equipe</h2>
                            <p className="mb-1">
                                Voici le projet éducatif de l’école effectif de 2021 à 2027
                            </p>
                            <p className="mb-1">
                                Ce document a pour but de dresser le portrait de l’école suite à l’analyse de situation afin de mettre à jour notre connaissance du milieu : élèves, personnel, parents et communauté.
                            </p>
                            <p className="mb-1">Le <a className="text-blue-700 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/11/219_Isoko la Source_Project_Educatif_2024-27_FINAL_A.pdf">projet éducatif de l’école Isoko la Source</a> vise à offrir à tous les élèves un environnement éducatif stimulant et des conditions propices au développement des compétences qui assureront la réussite éducative sur le plan de l’instruction, de la socialisation et de la qualification.</p>
                        </div>
                    </div>
                    <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                        <div className='mt-16 flow-root sm:mt-24'>
                            <div className=' rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                            <Video src="/preview-video.mp4" style={{ borderRadius: 12 }} accentColor="#1D4ED8" muted autoPlay loop />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
