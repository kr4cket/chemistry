import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={"flex flex-col gap-2 px-4 overflow-scroll w-full"}>
      {children}
    </main>
  );
};
