import { getCurrentUser } from "@/lib/actions/auth.action";
import { getFeedbackByInterviewId, getInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";
import { Button} from "@/components/ui/button";
import Link from "next/link";
import FeedbackCard from "@/components/FeedbackCard";

const Page = async ({ params }: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();

    const interview = await getInterviewById(id);
    if(!interview) redirect("/");

    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user!.id
    })

    //console.log(feedback)

    return (
        <div className="section-feedback">
            <div>
                <FeedbackCard key={id} {...feedback!}/>
            </div>
                    
            <div className="flex flex-row items-center justify-between">
                <div>
                    <Button className='btn-secondary py-5 px-25'>
                            <Link href={"/"}>
                                {'Back to Dashboard'}
                            </Link>
                    </Button>
                </div>
                <div>
                    <Button className="btn-primary py-5 px-25">
                        <Link href={`/interview/${id}`}>
                            {'Retake Interview'}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page;