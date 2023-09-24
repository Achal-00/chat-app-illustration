export default function Phone() {
  return (
    <div className="portrait:col-start-1 portrait:col-end-2 portrait:row-start-1 portrait:row-end-2 bg-white h-auto w-64 landscape:w-64 border-2 self-center portrait:justify-self-center landscape:justify-self-end landscape:mr-[15%] rounded-3xl shadow-2xl relative z-10 p-2">
      <div className="bg-app-background w-full h-full rounded-2xl grid gap-4">
        <div className="bg-gradient-to-r from-gradient-to to-gradient-from w-full h-16 rounded-t-2xl rounded-b-md grid">
          <div className="bg-white h-4 w-36 relative left-1/2 -translate-x-1/2 rounded-b-xl"></div>
          <div className="grid grid-cols-[0.1fr_0.2fr_0.6fr_0.1fr] px-4 self-start">
            <i className="fa-solid fa-chevron-left text-white self-center"></i>
            <img
              src="avatar.jpg"
              alt=""
              className="w-8 rounded-full border border-white self-center"
            />
            <div className="self-center">
              <p className="text-white text-xs font-medium">Samuel Green</p>
              <p className="text-sub-heading-text text-xs text-[0.5rem]">
                Available to Walk
              </p>
            </div>
            <i className="fa-solid fa-ellipsis-vertical text-white self-center justify-self-end"></i>
          </div>
        </div>
        <div className="px-2 grid gap-2">
          <p className="text-[0.5rem] text-chat-left-text w-2/3 bg-gray-200 p-2 rounded-xl rounded-bl-md">
            That sounds great. I'd be happy to discuss more.
          </p>
          <p className="text-[0.5rem] text-chat-left-text w-2/3 bg-gray-200 p-2 rounded-xl rounded-bl-md">
            Could you send over some pictures of your dog, please?
          </p>
          <div className="justify-self-end flex gap-1 pt-2">
            <img src="dog-image-1.jpg" alt="" className="w-10 rounded-xl" />
            <img src="dog-image-2.jpg" alt="" className="w-10 rounded-xl" />
            <img src="dog-image-3.jpg" alt="" className="w-10 rounded-xl" />
          </div>
          <p className="text-[0.5rem] text-chat-right-text w-2/3 bg-white p-2 rounded-xl rounded-br-md justify-self-end">
            Here are a few pictures. She's a happy girlll
          </p>
          <p className="text-[0.5rem] text-chat-right-text w-max bg-white p-2 rounded-xl rounded-br-md justify-self-end mb-2">
            Can you make it?
          </p>
          <p className="text-[0.5rem] text-chat-left-text w-2/3 bg-gray-200 p-2 rounded-xl rounded-bl-md">
            She looks so happy! The time we discussed works. How long shall i
            take her out for?
          </p>
          <div className="bg-gradient-to-r from-gradient-from to-gradient-to w-[80%] p-2 grid grid-cols-[0.1fr_0.8fr_0.3fr] gap-2 rounded-xl rounded-bl-md">
            <div className="w-4 h-4 border border-radio-button-outline rounded-full self-center"></div>
            <p className="text-sub-heading-text text-[0.5rem] self-center">
              30 minute walk
            </p>
            <p className="text-white text-xs font-bold self-center justify-self-end">
              $29
            </p>
          </div>
          <div className="bg-gradient-to-r from-gradient-from to-gradient-to w-[80%] p-2 grid grid-cols-[0.1fr_0.8fr_0.3fr] gap-2 rounded-xl rounded-bl-md">
            <div className="w-4 h-4 border border-radio-button-outline rounded-full self-center"></div>
            <p className="text-sub-heading-text text-[0.5rem] self-center">
              1 hour walk
            </p>
            <p className="text-white text-xs font-bold self-center justify-self-end">
              $49
            </p>
          </div>
          <div className="my-2 w-full bg-white rounded-full grid grid-cols-[0.9fr_0.1fr] p-1">
            <p className="text-placeholder-text text-xs self-center pl-4">
              Type a message...
            </p>
            <div className="bg-submit-button-background grid justify-items-center content-center rounded-full h-5 w-5">
              <i className="fa-solid fa-chevron-right text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
