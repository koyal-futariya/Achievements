
import Achievement from './components/Achievement';
export default function Home() {
  return (
    
  
    <div className="relative w-full h-[520px] md:h-[600px] my-8 md:my-12">
      <Achievement 
        grayscale={false}
        overlayBlurColor="transparent"
        segments={24}
        fit={0.5}
      />
    </div>
     
      
    
  );
}
