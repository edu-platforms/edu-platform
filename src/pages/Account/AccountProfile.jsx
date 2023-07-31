import image from '@/assets/img/tutor.png'
import { heart, verified } from '@/assets'
import { Col, Row, Avatar, Button, Divider } from 'antd'
import Slider from 'react-slick'
import { Wrapper, Primary } from '@/UI'
import { edit, plus, deleteIcon } from '@/assets'
import { settings } from '@/libs/constants'

export const AccountProfile = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/3 mx-4 te">
        <iframe
          className="w-full rounded-20 h-52 mb-6"
          src="https://www.youtube.com/embed/zJ0WMaYHIoU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Wrapper className="mb-6">
          <h2>Trial lesson</h2>
          <p>One time, 15 minutes</p>
          <Divider className="opacity-50 my-3" />
          <ul className="flex flex-between">
            <li>Trial lesson</li>
            <li className="text-green">Free</li>
          </ul>
          <Primary className="mt-5 w-full" htmlType="button">
            Call
          </Primary>
        </Wrapper>
        <Wrapper className="mb-6">
          <h2>Private lesson</h2>
          <Divider className="opacity-50 my-3" />
          <Primary className="w-full my-5" htmlType="button">
            Start Lesson
          </Primary>
          <Button
            block
            size="large"
            shape="round"
            type="primary"
            ghost
            htmlType="submit"
            className="bg-green !h-12"
          >
            Contact Lesson
          </Button>
        </Wrapper>
      </div>
      <div className="w-2/3 flex flex-col gap-5">
        <div className="bg-white rounded-10 pt-7 pb-7 pl-5 pr-5 gap-7 flex flex-col border-2">
          <div className="flex gap-7">
            <img src={image} className="w-[100px] h-[100px] rounded-[50%]" alt="avatar" />
            <div className="flex flex-col w-full gap-5">
              <div className="w-full flex justify-between">
                <span className="font-bold text-2xl">Teacher Darren</span>
                <div className="flex gap-5">
                  <img src={heart} alt="icon" />
                  <img src={heart} alt="icon" />
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-[30%] h-[63px] bg-gray rounded-10 flex items-center justify-center flex-col gap-[5px]">
                  <span className="text-xl">British</span>
                  <span className="text-sm text-slate-600">Accent</span>
                </div>
                <div className="w-[30%] h-[63px] bg-gray rounded-10 flex items-center justify-center flex-col gap-[5px]">
                  <span className="text-xl">British</span>
                  <span className="text-sm text-slate-600">Accent</span>
                </div>
                <div className="w-[30%] h-[63px] bg-gray rounded-10 flex items-center justify-center flex-col gap-[5px]">
                  <span className="text-xl">British</span>
                  <span className="text-sm text-slate-600">Accent</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <span className="text-sm">
              From China
              <br />
              Living in Seoul, Republic of Korea
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h2>About me</h2>
              <img src={edit} alt="" className="mx-3" />
            </div>
            <div className="text-base">
              All language. One world. Hello everyone! I do speak Chinese, English, Japanese, and
              Korean, and plan to learn español. I really know how difficult to learn a foreign
              language, and would like to share the secret. Normally, I prefer to explain by using
              the easiest target words, but if you want to understand them better from your
              language, I can also explain in the language that makes you feel more comfortable.
              According to your level, I will adjust the speed and vocabs picking. Take you to an
              immersive environment without going to China, a more comfortable and interesting as
              talking with a close friend.
            </div>
          </div>
        </div>
        <Row className="bg-white rounded-10 border-2 h-[109px]">
          <Col
            span={20}
            sm={{ span: 12 }}
            xl={{ span: 6 }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-base font-bold">542</span>
            <span className="text-sm"> Students</span>
          </Col>
          <Col
            span={20}
            sm={{ span: 12 }}
            xl={{ span: 6 }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-base font-bold">542</span>
            <span className="text-sm"> Students</span>
          </Col>
          <Col
            span={20}
            sm={{ span: 12 }}
            xl={{ span: 6 }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-base font-bold">542</span>
            <span className="text-sm"> Students</span>
          </Col>
          <Col
            span={20}
            sm={{ span: 12 }}
            xl={{ span: 6 }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-base font-bold">542</span>
            <span className="text-sm"> Students</span>
          </Col>
        </Row>
        <div className="w-full flex flex-col bg-white border-2 rounded-10 pt-[30px] pb-[30px] pl-[25px] pr-[25px] gap-4">
          <div className="flex justify-between">
            <h2>Me as a Teacher</h2>
            <img src={edit} alt="" className="mx-3" />
          </div>
          <div>
            I have been teaching for about 15 years, and one and a half years online. Several times
            I have been awarded for high student satisfaction. I have taught at all levels from
            beginner to advanced and even university preparation. I particularly enjoy grammar, but
            am able to assist in all aspects of language acquisition.
          </div>
        </div>
        <div className="w-full flex flex-col bg-white border-2 rounded-10 pt-[30px] pb-[30px] pl-[25px] pr-[25px]">
          <Wrapper className="mb-6">
            <div className="flex justify-between">
              <h2>
                Resume <span className="italic"></span>
              </h2>
              <img className="bg-green rounded-20 p-2" src={plus} alt="" />
            </div>

            <div className="work-experience mt-5">
              <h3 className="font-semibold mb-2">Work experience</h3>
              <ul className="flex justify-between mb-4">
                <li>2003-2007</li>
                <ul>
                  <li>Lector Benedek Elek College</li>
                  <li>Benedek Elek College - Sopron, Hungary</li>
                </ul>
                <ul>
                  <li className="flex justify-between gap-3">
                    <img src={deleteIcon} alt="" />
                    <img src={edit} alt="" />
                  </li>
                </ul>
              </ul>
              <ul className="flex justify-between mb-4">
                <li>2003-2007</li>
                <ul>
                  <li>Lector Benedek Elek College</li>
                  <li>Benedek Elek College - Sopron, Hungary</li>
                </ul>
                <ul>
                  <li className="flex justify-between gap-3">
                    <img src={deleteIcon} alt="" />
                    <img src={edit} alt="" />
                  </li>
                </ul>
              </ul>
              <ul className="flex justify-between mb-4">
                <li>2003-2007</li>
                <ul>
                  <li>Lector Benedek Elek College</li>
                  <li>Benedek Elek College - Sopron, Hungary</li>
                </ul>
                <ul>
                  <li className="flex justify-between gap-3">
                    <img src={deleteIcon} alt="" />
                    <img src={edit} alt="" />
                  </li>
                </ul>
              </ul>
            </div>
            <div className="education mt-5">
              <h3 className="font-semibold mb-2">Education</h3>
              <ul className="flex justify-between mb-4">
                <li>2003-2007</li>
                <ul>
                  <li>Lector Benedek Elek College</li>
                  <li>Benedek Elek College - Sopron, Hungary</li>
                </ul>
                <ul>
                  <li className="flex justify-between gap-3">
                    <img src={deleteIcon} alt="" />
                    <img src={edit} alt="" />
                  </li>
                </ul>
              </ul>
              <ul className="flex justify-between mb-4">
                <li>2003-2007</li>
                <ul>
                  <li>Lector Benedek Elek College</li>
                  <li>Benedek Elek College - Sopron, Hungary</li>
                </ul>
                <ul>
                  <li className="flex justify-between gap-3">
                    <img src={deleteIcon} alt="" />
                    <img src={edit} alt="" />
                  </li>
                </ul>
              </ul>
            </div>
          </Wrapper>
        </div>
        <Wrapper className="mb-6">
          <div className="flex justify-between">
            <h2 className="mb-3">
              Certificates <span className="italic">(optional)</span>
            </h2>
            <img className="bg-green rounded-20 p-2" src={plus} alt="" />
          </div>
          <div className="certificates mt-5">
            <h3 className="font-semibold mb-2">Education</h3>
            <ul className="flex justify-between mb-4">
              <li>2003-2007</li>
              <li className="flex justify-between">
                Teaching English as a Second Language TEFL
                <span className="text-green-500 mx-3 flex items-center">
                  <img src={verified} alt="logo" /> Verified
                </span>
              </li>
              <li className="flex gap-3">
                <img src={deleteIcon} alt="" />
                <img src={edit} alt="" />
              </li>
            </ul>
            <ul className="flex justify-between mb-4">
              <li>2003-2007</li>
              <li className="flex">
                Teaching English as a Second Language TEFL
                <span className="text-green-500 mx-3 flex items-center">
                  <img src={verified} alt="logo" />
                  Verified
                </span>
              </li>
              <li className="flex gap-3">
                <img src={deleteIcon} alt="" />
                <img src={edit} alt="" />
              </li>
            </ul>
          </div>
        </Wrapper>
        <Wrapper className="mb-6">
          <h2 className="mb-3">Reviews</h2>
          <div className="grid xxl:grid-cols-2 md:grid-cols-1 gap-5">
            <Slider style={{ margin: '100px' }} {...settings}>
              <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                <div className="w-full">
                  <div className="flex items-center mb-3">
                    <Avatar src={'https://picsum.photos/id/237/200/300'} size={60} />
                    <ul className="mx-3">
                      <h3 className="font-semibold">John Doe</h3>
                      <p>3 English lessons</p>
                    </ul>
                  </div>
                  <p>The interested warm up. Insist on learning more from Frank</p>
                  <p className="text-gray-500 my-2">Mar 8, 2023</p>
                </div>
              </div>
              <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                <div className="w-3/4">
                  <div className="flex items-center mb-3">
                    <Avatar src={'https://picsum.photos/id/237/200/300'} size={60} />
                    <ul className="mx-3">
                      <h3 className="font-semibold">John Doe</h3>
                      <p>3 English lessons</p>
                    </ul>
                  </div>
                  <p>The interested warm up. Insist on learning more from Frank</p>
                  <p className="text-gray-500 my-2">Mar 8, 2023</p>
                </div>
              </div>
              <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                <div className="w-3/4">
                  <div className="flex items-center mb-3">
                    <Avatar src={'https://picsum.photos/id/237/200/300'} size={60} />
                    <ul className="mx-3">
                      <h3 className="font-semibold">John Doe</h3>
                      <p>3 English lessons</p>
                    </ul>
                  </div>
                  <p>The interested warm up. Insist on learning more from Frank</p>
                  <p className="text-gray-500 my-2">Mar 8, 2023</p>
                </div>
              </div>
              <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                <div className="w-3/4">
                  <div className="flex items-center mb-3">
                    <Avatar src={'https://picsum.photos/id/237/200/300'} size={60} />
                    <ul className="mx-3">
                      <h3 className="font-semibold">John Doe</h3>
                      <p>3 English lessons</p>
                    </ul>
                  </div>
                  <p>The interested warm up. Insist on learning more from Frank</p>
                  <p className="text-gray-500 my-2">Mar 8, 2023</p>
                </div>
              </div>
            </Slider>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}
