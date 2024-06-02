"use client";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import {  PiMediumLogoBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  const handleCopyClick = () => {
    toast("Email copied to clipboard", { toastId: "copy" });
  };

  return (
    <>
      <div className="absolute flex place-items-center justify-center min-h-screen before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      <section className="flex justify-center min-h-screen items-center flex-col gap-3">
          <ul className="flex flex-col gap-7 items-center">
            <li>
              <div className="flex flex-row items-center gap-2">
                <Button>
                  <a href="mailto:darshan.vineeth@gmail.com"><span className="flex items-center gap-1"><MdEmail size={16}/>Email</span></a>
                </Button>
                <Button className="p-2">
                  <IoCopyOutline
                    onClick={() =>
                      navigator.clipboard
                        .writeText("darshan.vineeth@gmail.com")
                        .then(handleCopyClick)
                    }
                  />
                </Button>
              </div>
            </li>
            <li>
              <Button>
                <a href="https://github.com/darshan-vineeth"><span className="flex items-center gap-1"><GitHubLogoIcon/>Github</span></a>
              </Button>
            </li>
            <li>
              <Button>
                <a href="https://www.linkedin.com/in/darshan-vineeth/">
                <span className="flex items-center gap-1"><LinkedInLogoIcon/>LinkedIn</span>
                </a>
              </Button>
            </li>
            <li>
              <Button>
                <a href=""><span className="flex items-center gap-1"><TwitterLogoIcon/>Twitter</span></a>
              </Button>
            </li>
            <li>
              <Button>
                <a href="https://medium.com/@darshan.vineeth"><span className="flex items-center gap-1"><PiMediumLogoBold/>Medium</span></a>
              </Button>
            </li>
          </ul>
      </section>
    </>
  );
};

export default ContactPage;
