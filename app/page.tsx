import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import ActiveTask from "@/components/TasksPage/active-task";
import TaskList from "@/components/TasksPage/task-list";
import "./globals.css";

async function SupabaseWrapper() {
  const supabase = await createClient();
  const { data: myTasks } = await supabase.from("Daily_Tasks").select("*");
  //eq("user_id", "USER_ID");
  // const { data: friendTasks } = await supabase
  //   .from("Daily_Tasks")
  //   .select("*")
  //   .eq("user_id", "FRIEND_ID");
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-[5vh] lg:gap-[10vw] mb-8">
      <TaskList
        storedTasks={myTasks || []}
        owner="User"
        className="flex flex-col col-span-3"
      ></TaskList>
    </div>
  );

  /* <TaskList
        storedTasks={friendTasks || []}
        owner="Friend"
        className="flex flex-col col-span-2"
      ></TaskList> */
}

export default async function Home() {
  return (
    <main className="m-8 md:my-[5vw] md:mx-[10vw] flex flex-col">
      <ActiveTask className="flex flex-col mb-8"></ActiveTask>
      <Suspense fallback={<div>Loading...</div>}>
        <SupabaseWrapper />
      </Suspense>
    </main>
  );
}
