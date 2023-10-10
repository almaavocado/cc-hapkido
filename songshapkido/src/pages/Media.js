import React from "react";
import Carousel from '../shared/Carousel';
import AdultClassImage from '../assets/adult-class.jpg'; // Import the image files
import Kids from '../assets/Hapkido-Banner.png';
import blackbelt from '../assets/black-belts.jpg';

function Media() {
  return (
    <div>
    
    
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
        
        <div className="w-full md:w-3/4 lg:w-2/3">
            {/* Carousel 1 - Hapkido Tournament 2022 */}
            <div className="relative mb-9">
            <h2 className="text-2xl font-semibold mb-8 text-center">Hapkido Tournament 2022</h2>
            <Carousel
                images={[
                AdultClassImage, // Use the imported image variable
                Kids, // Use require for other imported images
                blackbelt,
              
                ]}
            />
            </div>

           
            {/* Carousel 2 - Hapkido Tournament 2023 */}
            <div className="relative mb-9">
            <h2 className="text-2xl font-semibold mb-8 text-center">Hapkido Tournament 2023</h2>
            <Carousel
                images={[
                  AdultClassImage,
                  AdultClassImage
                ]}
            />
            </div>

            {/* Carousel 3 - Black Belt Test 2022 */}
            <div className="relative mb-9">
            <h2 className="text-2xl font-semibold mb-8 text-center">Black Belt Test 2022</h2>
            <Carousel
                images={[
              
                  AdultClassImage,
                  AdultClassImage
                ]}
            />
            </div>

            {/* Carousel 4 - Hapkido 2018 Memories */}
            <div className="relative mb-9">
            <h2 className="text-2xl font-semibold mb-8 text-center">Hapkido 2018 Memories</h2>
            <Carousel
                images={[
                  AdultClassImage,
                  AdultClassImage
                ]}
            />
            </div>
            
        </div>
        </div>
    
    </div>
  );
}

export default Media;
