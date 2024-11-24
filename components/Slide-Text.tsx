import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function Slidetext() {
  return (
    <div className="bg-black py-12 pb-4">
      <VelocityScroll
        text="Let's Build Together |"
        default_velocity={3}
        className="mx-4 text-5xl font-extra-bold text-orange-500"
      />
    </div>
  );
}
