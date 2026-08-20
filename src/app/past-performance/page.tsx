"use client";

import Image from 'next/image';
import { ngonjeCaseStudies, vestisCaseStudies } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type ProjectStudy = {
  projectTitle: string;
  client: string;
  description: string;
  duration: string;
  contractValue: string;
  contractNumber: string;
  poc: string;
  imageId: string;
  vehicle?: string;
  location?: string;
};

const currentAwards = ngonjeCaseStudies.filter((study) => study.group === "current");
const logisticsAwards = ngonjeCaseStudies.filter((study) => study.group === "logistics");
const completedAwards = ngonjeCaseStudies.filter((study) => study.group === "completed");

export default function PastPerformancePage() {

  const ProjectCard = ({ study }: { study: ProjectStudy }) => {
    const studyImage = PlaceHolderImages.find(p => p.id === study.imageId);
    return (
        <Card className="flex flex-col">
            {studyImage && (
                <div className="relative aspect-video w-full">
                <Image
                    src={studyImage.imageUrl}
                    alt={study.projectTitle}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={studyImage.imageHint}
                />
                </div>
            )}
            <CardHeader>
                <CardTitle>{study.projectTitle}</CardTitle>
                <CardDescription>{study.client}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                 <div>
                    <h4 className="font-semibold text-primary text-sm">Description</h4>
                    <p className="text-muted-foreground mt-1 text-sm">{study.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-semibold text-primary">Duration</h4>
                        <p className="text-muted-foreground">{study.duration}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">Contract Value</h4>
                        <p className="text-muted-foreground">{study.contractValue}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">Contract #</h4>
                        <p className="text-muted-foreground font-code">{study.contractNumber}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">POC</h4>
                        <p className="text-muted-foreground">{study.poc}</p>
                    </div>
                    {study.vehicle && (
                    <div>
                        <h4 className="font-semibold text-primary">Vehicle</h4>
                        <p className="text-muted-foreground">{study.vehicle}</p>
                    </div>
                    )}
                    {study.location && (
                    <div>
                        <h4 className="font-semibold text-primary">Place of Performance</h4>
                        <p className="text-muted-foreground">{study.location}</p>
                    </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
  }

  return (
    <>
      <div className="container mx-auto py-12 sm:py-20 space-y-16 sm:space-y-24">
        <section id="ngonge-projects">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Current Federal Performance</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    Active laundry and uniform awards NGONGE is performing as prime.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentAwards.map((study) => (
                    <ProjectCard key={study.contractNumber} study={study} />
                ))}
            </div>
        </section>

        <Separator />

        <section id="logistics-projects">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Mission Logistics</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    Active transportation and contingency support vehicles.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {logisticsAwards.map((study) => (
                    <ProjectCard key={study.contractNumber} study={study} />
                ))}
            </div>
        </section>

        <Separator />

        <section id="completed-projects">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Completed Awards</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    Recently completed NGONGE prime awards.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedAwards.map((study) => (
                    <ProjectCard key={study.contractNumber} study={study} />
                ))}
            </div>
        </section>
        
        <Separator />

        <section id="vestis-projects">
            <div className="text-center">
                <div className="inline-flex items-center gap-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Partner Experience</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mt-2">Past Projects</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    Key projects performed by our strategic partner, showcasing their extensive experience.
                </p>
            </div>
             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vestisCaseStudies.map((study) => (
                    <ProjectCard key={study.contractNumber} study={study} />
                ))}
            </div>
        </section>
      </div>
    </>
  );
}
