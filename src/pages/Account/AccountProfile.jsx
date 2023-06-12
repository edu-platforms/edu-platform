import image from '@/assets/img/tutor.png'
import { heart } from '@/assets'
import { Card, Col, Row, Space } from 'antd'

export const AccountProfile = () => {
  return (
    <div>
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
              <span className="text-slate-500">edu-platform teacher since May 18, 2021</span>
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
          <h2>Me as a Teacher</h2>
          <div>
            I have been teaching for about 15 years, and one and a half years online. Several times
            I have been awarded for high student satisfaction. I have taught at all levels from
            beginner to advanced and even university preparation. I particularly enjoy grammar, but
            am able to assist in all aspects of language acquisition.
          </div>
        </div>
        <div className="w-full flex flex-col bg-white border-2 rounded-10 pt-[30px] pb-[30px] pl-[25px] pr-[25px]">
          <h2>Resume</h2>
          <Space direction="vertical" size="middle">
            <Card title="Work Expreince" size="small">
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Space>
        </div>
      </div>
      <div className="w-1/3 bg-amber-200"></div>
    </div>
  )
}
