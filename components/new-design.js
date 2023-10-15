import { memo } from "react";

const NewDesign = memo(() => {
  return (
    <header className="bg-white w-[1440px] h-[2400px] overflow-hidden text-left text-13xl text-black font-montserrat">
      <section className="absolute top-[2200px] left-[calc(50%_-_720px)] bg-gray-100 w-[1440px] h-[200px] text-left text-5xl text-white font-montserrat">
        <div className="absolute top-[100px] left-[511px] w-[438px] h-[29px] flex flex-row items-center justify-start gap-[20px]">
          <div className="relative font-medium">Terms of use</div>
          <div className="relative font-medium">Terms and conditions</div>
        </div>
        <div className="absolute top-[154px] left-[calc(50%_-_432px)] text-[16px] font-medium">
          All information on this site is not a public offer. We are in no way
          affiliated with or endorsed by Mojang, AB.
        </div>
      </section>
      <div className="absolute top-[1796px] left-[342px] w-[756px] h-[357px]">
        <div className="absolute top-[36px] left-[0px] rounded-xl bg-white shadow-[0px_4px_10px_#ffda8b] w-[756px] h-[321px]" />
        <img
          className="absolute top-[0px] left-[342px] w-[72px] h-[71px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <h2 className="m-0 absolute top-[79px] left-[269px] text-inherit font-bold font-inherit">
          <span>{`Connect `}</span>
          <span className="text-goldenrod-100">now</span>
          <span>!</span>
        </h2>
        <div className="absolute top-[126px] left-[221px] text-xl font-medium text-gray-100">
          1.19 - 1.20.1 · Minecraft: Java Edition
        </div>
        <div className="absolute top-[278px] left-[89px] w-[611px] h-[43px] flex flex-row items-center justify-start gap-[15px] text-5xl text-white">
          <div className="relative w-[284px] h-[43px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-3xs w-[284px] h-[43px]"
              alt=""
              src="/rectangle-32.svg"
            />
            <div className="absolute top-[5px] left-[50px] font-medium">
              Join now!
            </div>
            <img
              className="absolute h-[46.51%] w-[7.04%] top-[27.91%] right-[86.27%] bottom-[25.58%] left-[6.69%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/laptop-mac.svg"
            />
          </div>
          <div className="relative w-[312px] h-[43px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-3xs w-[312px] h-[43px]"
              alt=""
              src="/rectangle-321.svg"
            />
            <div className="absolute top-[5px] left-[50px] font-semibold">
              play.mythicisland.eu
            </div>
            <img
              className="absolute h-[46.51%] w-[6.41%] top-[27.91%] right-[87.5%] bottom-[25.58%] left-[6.09%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/laptop-mac.svg"
            />
          </div>
        </div>
      </div>
      <section className="absolute top-[956px] left-[62px] w-[1314px] h-[638px] flex flex-col items-center justify-end gap-[106px] text-left text-13xl text-black font-montserrat">
        <h2 className="m-0 relative text-inherit font-bold font-inherit">
          <span>{`What’s in it for `}</span>
          <span className="text-primary">you</span>
          <span>?</span>
        </h2>
        <div className="relative w-[1314px] h-[493px] text-21xl text-gray-100">
          <div className="absolute top-[0px] left-[705px] w-[609px] h-[193px]">
            <img
              className="absolute top-[-91px] left-[-100px] rounded-xl w-[751px] h-96 object-cover"
              alt=""
              src="/rectangle-34@2x.png"
            />
            <h1 className="m-0 absolute top-[9px] left-[92px] text-inherit font-bold font-inherit">
              Community
            </h1>
            <div className="absolute top-[82px] left-[15px] text-xl font-semibold inline-block w-[594px]">
              <span>{`Server players help each other, team up, build buildings and farms together and `}</span>
              <span className="text-crimson-200">
                get incredible experience
              </span>
              <span> and enjoyment from playing on the server</span>
            </div>
            <img
              className="absolute top-[0px] left-[15px] w-[66px] h-[66px] object-cover"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className="absolute top-[296px] left-[705px] w-[609px] h-[193px]">
            <img
              className="absolute top-[-91px] left-[-100px] rounded-xl w-[751px] h-96 object-cover"
              alt=""
              src="/rectangle-341@2x.png"
            />
            <h1 className="m-0 absolute top-[9px] left-[92px] text-inherit font-bold font-inherit">
              Different events
            </h1>
            <div className="absolute top-[82px] left-[15px] text-xl font-semibold inline-block w-[594px] text-black">
              <span>{`Events are held `}</span>
              <span className="text-primary">at least once a week</span>
              <span>
                . All server players can participate, build and organize. There
                is a special zone on the server for events
              </span>
            </div>
            <img
              className="absolute top-[0px] left-[15px] w-[66px] h-[66px] object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <div className="absolute top-[301px] left-[0px] w-[609px] h-48">
            <img
              className="absolute top-[-92px] left-[-62px] rounded-xl w-[713px] h-96 object-cover"
              alt=""
              src="/rectangle-342@2x.png"
            />
            <h1 className="m-0 absolute top-[8px] left-[92px] text-inherit font-bold font-inherit">
              Fast server
            </h1>
            <div className="absolute top-[81px] left-[15px] text-xl font-semibold inline-block w-[594px]">
              <span>
                We will always strive to ensure that the server is not loaded
                with unnecessary files and that the
              </span>
              <span className="text-palegoldenrod">{` `}</span>
              <span className="text-goldenrod-200">
                server runs as fast as possible
              </span>
              <span>, without lag</span>
            </div>
            <img
              className="absolute top-[0px] left-[15px] w-[66px] h-[66px] object-cover"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[578px] h-[184px]">
            <img
              className="absolute top-[-100px] left-[-62px] rounded-xl w-[713px] h-96 object-cover"
              alt=""
              src="/rectangle-343@2x.png"
            />
            <h1 className="m-0 absolute top-[9px] left-[73px] text-inherit font-bold font-inherit">
              <span>{`Always `}</span>
              <span className="text-crimson-100">online</span>
            </h1>
            <div className="absolute top-[73px] left-[0px] text-xl font-semibold inline-block w-[578px]">
              <p className="m-0">
                We are always working on the server so it never
              </p>
              <p className="m-0">
                <span>{`has to be under `}</span>
                <span className="text-crimson-100">maintenance</span>
                <span className="text-gray-100">, to make everyone play</span>
              </p>
              <p className="m-0">calmly and not worried about the stops!</p>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[66px] h-[66px] object-cover"
              alt=""
              src="/image-12@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="absolute top-[157px] left-[52px] w-[1460px] h-[605px] text-left text-xl text-gray-100 font-montserrat">
        <div className="absolute top-[41px] left-[0px] w-[932px] h-[419px]">
          <div className="absolute top-[0px] left-[0px] w-[932px] h-[358px]">
            <div className="absolute top-[334px] left-[11px] font-medium">{`1.19 - 1.20.1 · Minecraft: Java Edition `}</div>
            <div className="absolute top-[0px] left-[0px] w-[932px] h-[332px] text-[26px]">
              <div className="absolute top-[236px] left-[11px] font-medium inline-block w-[585px]">
                <span>{`A space with `}</span>
                <span className="text-primary">ideal conditions</span>
                <span>
                  {" "}
                  for developing your own creativity in the environment of a
                  lobby server
                </span>
              </div>
              <h1 className="m-0 absolute top-[0px] left-[0px] text-[89px] font-bold font-inherit inline-block w-[932px]">
                <span>{`International server for `}</span>
                <span className="text-primary">everyone</span>
              </h1>
            </div>
          </div>
          <div className="absolute top-[376px] left-[11px] w-[620px] h-[43px] flex flex-row items-center justify-start gap-[9px] text-5xl text-white">
            <div className="relative w-[290px] h-[43px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-3xs w-[290px] h-[43px]"
                alt=""
                src="/rectangle-322.svg"
              />
              <div className="absolute top-[5px] left-[51px] font-medium inline-block w-[185px] h-[29px]">
                xzy/100 players
              </div>
              <img
                className="absolute h-[46.51%] w-[7.04%] top-[27.91%] right-[86.27%] bottom-[25.58%] left-[6.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/laptop-mac1.svg"
              />
            </div>
            <div className="relative w-[321px] h-[43px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-3xs w-[321px] h-[43px]"
                alt=""
                src="/rectangle-323.svg"
              />
              <div className="absolute top-[5px] left-[50px] font-semibold">
                play.mythicisland.eu
              </div>
              <img
                className="absolute h-[46.51%] w-[6.23%] top-[27.91%] right-[87.85%] bottom-[25.58%] left-[5.92%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/laptop-mac2.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[-0.4px] left-[863.24px] w-[866px] h-[607.78px] object-cover"
          alt=""
          src="/vector@2x.png"
        />
      </section>
      <header
        className="absolute top-[0px] left-[0px] bg-gray-200 [backdrop-filter:blur(50px)] w-[1440px] h-[89px] text-left text-xl text-ghostwhite font-montserrat"
        id="Header"
      >
        <button className="cursor-pointer [border:none] p-0 bg-primary absolute top-[22px] left-[1277px] rounded-lg w-[139px] h-11" />
        <div className="absolute top-[32px] left-[1233px] w-[154px] h-[25px] flex flex-row items-center justify-start gap-[77px]">
          <img
            className="relative w-[21.88px] h-[25px]"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative font-semibold">Store</div>
        </div>
        <div className="absolute top-[32px] left-[543px] w-[328px] h-6 flex flex-row items-center justify-start gap-[44px] text-gray-100">
          <a
            className="[text-decoration:none] relative font-semibold text-primary"
            href="https://mythicisland.eu"
          >
            Home
          </a>
          <a
            className="[text-decoration:none] relative font-semibold text-[inherit]"
            href="https://team.mythicisland.eu"
            target="_blank"
          >
            Application
          </a>
          <a
            className="[text-decoration:none] relative font-semibold text-[inherit]"
            href="https://rules.mythicisland.eu"
            target="_blank"
          >
            Rules
          </a>
        </div>
      </header>
      <img
        className="absolute h-[3.58%] w-[5.28%] top-[0.29%] right-[91.46%] bottom-[96.13%] left-[3.26%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/mythic-island-logo-3@2x.png"
      />
      <div className="absolute top-[2226px] left-[343px] w-[753px] h-[65px] flex flex-row items-center justify-start gap-[24px] text-5xl text-white">
        <img
          className="relative w-[57.44px] h-[65px] object-cover"
          alt=""
          src="/mythic-island-logo-4@2x.png"
        />
        <div className="relative">
          <span className="font-medium">{`The website is part of the `}</span>
          <b className="text-primary">Mythic Island</b>
          <span className="font-medium"> server network</span>
        </div>
      </div>
      <img
        className="absolute top-[1960px] left-[676px] w-[102px] h-[87px] object-cover"
        alt=""
        src="/image-21@2x.png"
      />
      <img
        className="absolute h-[0.71%] w-[1.32%] top-[1.5%] right-[8.61%] bottom-[97.79%] left-[90.07%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
    </header>
  );
});

export default NewDesign;
