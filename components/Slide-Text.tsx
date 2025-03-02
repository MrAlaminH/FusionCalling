import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function Slidetext() {
  return (
    <div className="bg-black py-12 pb-4">
      <VelocityScroll
        text="Let's Build Together ❋"
        default_velocity={3}
        className="mx-4 text-7xl font-extra-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
      />
    </div>
  );
}
