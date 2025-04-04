import { getCurrentUser } from "@/lib/actions/auth.action";
import { getFeedbackByInterviewId, getInterviewById } from "@/lib/actions/general.action";
import Image from "next/image";
import { redirect } from "next/navigation";
import dayjs from "dayjs";
import Calendar from "@/public/calendar.svg";
import Star from "@/public/star.svg";

const Page = async ({ params }: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();

    const interview = await getInterviewById(id);
    if(!interview) redirect("/");

    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user!.id
    })

    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

    const feedbackCatgoryScores = feedback?.categoryScores || [];
    //console.log(feedback)

    return (
        <div className="section-feedback">
            <div className="flex-row items-center justify-center mt-10 w-[720px] max-sm:w-full">
                <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight">
                    Feedback on the Interview - {interview.role} Interview
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10 gap-4 md:gap-10 w-full"> 
                    <div className="flex flex-row gap-2 items-center text-sm md:text-base">
                        <Image 
                            src={Star}
                            alt='star'
                            width={22}
                            height={22}
                            className="w-4 h-4 md:w-[22px] md:h-[22px]"
                        />
                        <p>Overall Impression:</p>
                        <p className="font-bold">{feedback?.totalScore}</p>
                        <p>/ 100</p>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-2 text-sm md:text-base'>
                            <Image 
                                src={Calendar}
                                alt='calander' 
                                width={22}
                                height={22}
                                className="w-4 h-4 md:w-[22px] md:h-[22px]"
                            />
                            <p>
                                {formattedDate}
                            </p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
                <div>
                    <p className="text-lg leading-7 mt-6 mb-8 px-4 text-justify">
                        This interview does not reflect serious interest or engagement from the candidate. 
                        Their responses are dismissive, vague, or outright negative, 
                        making it difficult to assess their qualifications, motivation, or suitability for the role.
                    </p>
                </div>
                <div>
                    <h2 className="py-4 my-4">Breakdown of Evaluation</h2>
                    {feedbackCatgoryScores.map((c) => (
                        <div key={c.name} className="flex-col items-center justify-between gap-4 p-4 md:p-6 mb-6">
<h4 className="text-xl font-semibold mb-4">{feedbackCatgoryScores.indexOf(c) + 1}. {c.name} ({c.score}/100)</h4>
                            <div className="w-full">
                            {c.comment.split('.').filter(Boolean).map((point, index) => (
                                <p key={index} className="flex items-start gap-3 mb-3 px-2">
                                    <span className="min-w-[6px] h-[6px] rounded-full bg-gray-400 mt-2" />
                                    <span className="flex-1">{point.trim()}</span>
                                </p>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>  

                <div>
                    <h3>Strengths</h3>
                </div>
            </div>
        </div>
    )
}

export default Page;