
import ClassScheduleImg from '../assets/SongsClassSchedule.png';

export default function Hapkido() {
  return (
    <div>
      <div className="bg-gray-100 pt-6">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">Class Schedule</h1>


      <div className="sm:py-32 lg:px-8 flex justify-center items-center">

        <img src={ClassScheduleImg} alt="Class Schedule" className="max-w-full h-70" />
      </div>
    </div>
    </div>
  );
}
