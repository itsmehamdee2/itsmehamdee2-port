import React from "react";
import { Github, Instagram, Linkedin, Locate, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="bottom1 ">
        <div className="min-h-screen w-full text-slate-900 relative">
          {/* White Sphere Grid Background */}
          <div className="absolute bgline1 inset-0 z-0" />

          <div className="container pt-20 relative mx-auto max-w-5xl">
            <h2 className="text-5xl uppercase max-md:text-4xl font-bold mb-4 text-center">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700">
                Touch
              </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here is my Contact details bellow if you want to get in touch with
              me personally
              <span className="font-semibold">
                {" "}
                <br />
                “Hire an attitude, not just experience and qualification.” –
                Greg{" "}
              </span>
            </p>
            <div className="grid max-md:flex max-md:flex-col max-md:items-center max-md:justify-center grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold max-md:mb-2 uppercase mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 justify-center">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium uppercase text-left">Email</h4>
                      <a
                        className="text-muted-foreground  text-md hover:text-primary transition-colors"
                        href="mailto:itsmehamdee2@gmail.com"
                      >
                        itsmehamdee2@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className=" text-left uppercase font-medium">
                        Phone
                      </h4>
                      <a
                        className="text-muted-foreground text-md hover:text-primary transition-colors"
                        href="tel:09061666051"
                      >
                        0906-1666-051
                      </a>
                    </div>
                  </div>{" "}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Locate className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className=" text-left uppercase font-medium">
                        Location
                      </h4>
                      <a className="text-muted-foreground text-md hover:text-primary transition-colors">
                        Philippines
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center  justify-center">
                <div className="pb-8 flex flex-col max-md:flex max-md:items-center  max-md:justify-center">
                  <div className="flex">
                    <h4 className="font-semibold text-xl uppercase max-md:mb-2  mb-10">
                      Connect With Me
                    </h4>
                  </div>
                  <div className="flex flex-row items-center  text-black space-x-4 justify-center">
                    <a
                      href="https://www.linkedin.com/in/ahamdeealonto/"
                      target="blank"
                      className="hover:text-primary border border-black p-2 shadow-[0_0_10px_blue]  rounded-full hover:scale-110"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/thefroozch"
                      target="blank"
                      className="hover:text-primary border border-black p-2 shadow-[0_0_10px_blue]  rounded-full hover:scale-110"
                    >
                      <Instagram />
                    </a>{" "}
                    <a
                      href="https://github.com/itsmehamdee2"
                      target="blank"
                      className="hover:text-primary border border-black shadow-[0_0_10px_blue] p-2 rounded-full hover:scale-110"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
