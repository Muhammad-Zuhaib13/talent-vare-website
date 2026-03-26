import { Main, Profile } from "@/app/components/layout"
import { FindJobContainer } from "@/app/components/home"
export default function Page() {
  return (
    <Main>
      <div className="custom-container pt-[25px] ">
        <div className="flex flex-row gap-[24px]">
          <Profile />
          <FindJobContainer />
        </div>

      </div>
    </Main>
  );
}
