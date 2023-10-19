import React from 'react'

function Quick() {
  return (
    <>
     <>
      <div className="quickTherapyMain">
        <section className="banner bg-cyan-600 w-[90%] h-[70vh] mt-3 mb-[4rem] mr-auto ml-auto rounded-[4rem]">
          <div className="topic text-[5rem] font-bold flex justify-center text-center text-red-300">
            QUICK THERAPY
          </div>
        </section>

        <section className="topicCards w-[80%] mr-auto ml-auto mt-[2rem]">
          <div className="heading text-center text-[5rem] font-bold mb-[2rem]">
            {" "}
            Choose What to learn
          </div>
          <ul className="grid grid-cols-2 gap-[4rem]">
            <li>
              <div className="category-card ">
                <div className="card-icon">
                  <ion-icon name="briefcase-outline" />
                </div>
                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Personal Development</a>
                  </h3>
                  <div className="description text-black ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam veniam incidunt libero ipsam cupiditate corporis.
                  </div>
                  <button className=" bg-fuchsia-400 mt-[1rem] px-5 py-3 rounded-[0.5rem] hover:text-white hover:bg-black">
                    Go somewhere
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="category-card">
                <div className="card-icon">
                  <ion-icon name="file-tray-full-outline" />
                </div>
                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Human Research</a>
                  </h3>
                  <div className="description text-black ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam veniam incidunt libero ipsam cupiditate corporis.
                  </div>
                  <button className=" bg-fuchsia-400 mt-[1rem] px-5 py-3 rounded-[0.5rem] hover:text-white hover:bg-black">
                    Go somewhere
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="category-card">
                <div className="card-icon">
                  <ion-icon name="color-palette-outline" />
                </div>
                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Art &amp; Design</a>
                  </h3>
                  <div className="description text-black ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam veniam incidunt libero ipsam cupiditate corporis.
                  </div>
                  <button className=" bg-fuchsia-400 mt-[1rem] px-5 py-3 rounded-[0.5rem] hover:text-white hover:bg-black">
                    Go somewhere
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="category-card">
                <div className="card-icon">
                  <ion-icon name="layers-outline" />
                </div>
                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Business Management</a>
                  </h3>
                  <div className="description text-black ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam veniam incidunt libero ipsam cupiditate corporis.
                  </div>
                  <button className=" bg-fuchsia-400 mt-[1rem] px-5 py-3 rounded-[0.5rem] hover:text-white hover:bg-black">
                    Go somewhere
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="category-card">
                <div className="card-icon">
                  <ion-icon name="laptop-outline" />
                </div>
                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Web Development</a>
                  </h3>
                  <div className="description text-black ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam veniam incidunt libero ipsam cupiditate corporis.
                  </div>
                  <button className=" bg-fuchsia-400 mt-[1rem] px-5 py-3 rounded-[0.5rem] hover:text-white hover:bg-black">
                    Go somewhere
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="category-card">
                <div className="card-icon">
                  <ion-icon name="thumbs-up-outline" />
                </div>
                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Lifestyle</a>
                  </h3>
                  <div className="description text-black ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam veniam incidunt libero ipsam cupiditate corporis.
                  </div>
                  <button className=" bg-fuchsia-400 mt-[1rem] px-5 py-3 rounded-[0.5rem] hover:text-white hover:bg-black">
                    Go somewhere
                  </button>
                </div>
              </div>
            </li>
            <li></li>
          </ul>
        </section>
      </div>
    </>
    </>
  )
}

export default Quick