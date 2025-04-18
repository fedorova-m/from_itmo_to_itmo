import "./home.scss"
import { Header } from "../../components/header/header"
import { ProfileModal } from "../../components/profileModal/profileModal"
import { Link } from "react-router-dom"

const Home = ({
  profileModal,
  setProfileModal,
  textProfileModalActive,
  setTextProfileModalActive,
}) => {
  return (
    <div className="homePage">
      <Header setProfileModal={setProfileModal} />
      <div className="containerHomePage">
        <div className="titleHomePage">От ИТМО к ИТМО</div>
        <div className="text1HomePage">
          Откройте для себя Петербург, изучая историю на каждом шагу 🌍
        </div>
        <div className="infoBlockCenterHomePage">
          <div className="lineInfoBlockCenterHomePage">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.9967 7.29919C32.188 6.49011 31.2278 5.8483 30.171 5.4104C29.1142 4.97251 27.9814 4.74713 26.8375 4.74713C25.6936 4.74713 24.5608 4.97251 23.504 5.4104C22.4472 5.8483 21.487 6.49011 20.6783 7.29919L19 8.97752L17.3217 7.29919C15.6882 5.66568 13.4726 4.74798 11.1625 4.74798C8.85236 4.74798 6.63684 5.66568 5.00333 7.29919C3.36982 8.9327 2.45212 11.1482 2.45212 13.4584C2.45212 15.7685 3.36982 17.984 5.00333 19.6175L19 33.6142L32.9967 19.6175C33.8057 18.8088 34.4476 17.8486 34.8854 16.7918C35.3233 15.735 35.5487 14.6023 35.5487 13.4584C35.5487 12.3144 35.3233 11.1817 34.8854 10.1249C34.4476 9.06807 33.8057 8.10789 32.9967 7.29919Z"
                stroke="#272761"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="textLineInfoBlockCenterHomePage">
              Мы предлагаем уникальные маршруты, соединяющие корпуса нашего
              университета с самыми интересными историческими местами северной
              столицы. Забудьте о скучных переездах – превратите дорогу между
              занятиями в увлекательное путешествие во времени!
            </div>
          </div>
          <div className="lineInfoBlockCenterHomePage">
            <svg
              width="38"
              height="39"
              viewBox="0 0 38 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.27749 7.71855L4.73883 8.05689L4.73893 8.05646L3.27749 7.71855ZM14.0442 7.71855L12.5818 8.05245L12.5828 8.05689L14.0442 7.71855ZM10.9725 15.3502L12.0063 16.4371L12.0087 16.4348L10.9725 15.3502ZM6.33332 15.3502L5.2923 16.4302L5.29936 16.437L5.30652 16.4437L6.33332 15.3502ZM23.8608 26.7186L25.3222 27.0569L25.3223 27.0565L23.8608 26.7186ZM34.6908 26.7186L33.2294 27.0565L33.2295 27.0569L34.6908 26.7186ZM31.6033 34.3502L30.572 33.261L30.5695 33.2634L31.6033 34.3502ZM26.9483 34.3502L25.917 35.4394L25.9215 35.4437L26.9483 34.3502ZM19 6.85189C18.1716 6.85189 17.5 7.52346 17.5 8.35189C17.5 9.18031 18.1716 9.85189 19 9.85189V6.85189ZM25.3333 13.9094L26.321 15.0383L26.3228 15.0367L25.3333 13.9094ZM12.6825 24.9769L13.6674 26.1083L13.6701 26.1058L12.6825 24.9769ZM19 32.0186C19.8284 32.0186 20.5 31.347 20.5 30.5186C20.5 29.6901 19.8284 29.0186 19 29.0186V32.0186ZM8.6865 7.64355C7.85807 7.64355 7.1865 8.31513 7.1865 9.14355C7.1865 9.97198 7.85807 10.6436 8.6865 10.6436V7.64355ZM8.70479 10.6436C9.53322 10.6436 10.2048 9.97198 10.2048 9.14355C10.2048 8.31513 9.53322 7.64355 8.70479 7.64355V10.6436ZM29.2698 26.6436C28.4414 26.6436 27.7698 27.3151 27.7698 28.1436C27.7698 28.972 28.4414 29.6436 29.2698 29.6436V26.6436ZM29.2881 29.6436C30.1165 29.6436 30.7881 28.972 30.7881 28.1436C30.7881 27.3151 30.1165 26.6436 29.2881 26.6436V29.6436ZM4.73893 8.05646C5.18305 6.13564 6.83569 5.1098 8.66676 5.1098C10.4976 5.1098 12.1439 6.13476 12.5818 8.05245L15.5065 7.38466C14.6935 3.82401 11.5899 2.1098 8.66676 2.1098C5.74386 2.1098 2.63859 3.82313 1.81604 7.38065L4.73893 8.05646ZM12.5828 8.05689C13.1334 10.4348 11.6468 12.6315 9.93631 14.2656L12.0087 16.4348C13.8448 14.6807 16.4433 11.4307 15.5055 7.38021L12.5828 8.05689ZM9.93867 14.2634C9.22788 14.9395 8.08975 14.9419 7.36012 14.2567L5.30652 16.4437C7.17356 18.1969 10.1204 18.2309 12.0063 16.4371L9.93867 14.2634ZM7.37434 14.2703C5.67569 12.6328 4.18794 10.4363 4.73883 8.05689L1.81614 7.38021C0.878697 11.4292 3.47595 14.6793 5.2923 16.4302L7.37434 14.2703ZM25.3223 27.0565C25.7652 25.1409 27.4247 24.1098 29.2758 24.1098C31.127 24.1098 32.7865 25.1409 33.2294 27.0565L36.1523 26.3806C35.3285 22.8179 32.2063 21.1098 29.2758 21.1098C26.3453 21.1098 23.2231 22.8179 22.3994 26.3806L25.3223 27.0565ZM33.2295 27.0569C33.7797 29.4333 32.2944 31.63 30.572 33.261L32.6347 35.4394C34.4905 33.6821 37.0903 30.4321 36.1522 26.3802L33.2295 27.0569ZM30.5695 33.2634C29.8587 33.9395 28.7047 33.9419 27.9751 33.2567L25.9215 35.4437C27.7886 37.1969 30.7513 37.2309 32.6371 35.4371L30.5695 33.2634ZM27.9797 33.261C26.2572 31.63 24.772 29.4333 25.3222 27.0569L22.3995 26.3802C21.4613 30.4321 24.0611 33.6821 25.917 35.4394L27.9797 33.261ZM19 9.85189H23.2433V6.85189H19V9.85189ZM23.2433 9.85189C24.7849 9.85189 25.5073 11.7608 24.3438 12.782L26.3228 15.0367C29.561 12.1946 27.5601 6.85189 23.2433 6.85189V9.85189ZM24.3457 12.7804L11.6948 23.8479L13.6701 26.1058L26.321 15.0383L24.3457 12.7804ZM11.6976 23.8455C8.44877 26.6736 10.4589 32.0186 14.7567 32.0186V29.0186C13.2277 29.0186 12.5145 27.1118 13.6674 26.1083L11.6976 23.8455ZM14.7567 32.0186H19V29.0186H14.7567V32.0186ZM8.6865 10.6436H8.70479V7.64355H8.6865V10.6436ZM29.2698 29.6436H29.2881V26.6436H29.2698V29.6436Z"
                fill="#272761"
              />
            </svg>
            <div className="textLineInfoBlockCenterHomePage">
              Добро пожаловать в "ИТМО сквозь времена" – ваш личный гид по
              Петербургу, создан для студентов и сотрудников ИТМО!
            </div>
          </div>
        </div>
        <div className="title2HomePage">С нашим сайтом вы сможете 👇</div>
        <div className="infoContainerHomePage">
          <div className="infoLineContainerHomePage">
            <div className="infoHomePage">
              • Легко спланировать маршрут между корпусами ИТМО. Больше не нужно
              тратить время на поиски оптимального пути.
            </div>{" "}
          </div>
          <div
            className="infoLineContainerHomePage"
            style={{ justifyContent: "end" }}
          >
            <div className="infoHomePage">
              • Узнать о скрытых жемчужинах Петербурга. Откройте для себя музеи,
              памятники архитектуры и другие исторические места, расположенные
              по пути.
            </div>{" "}
          </div>
          <div className="infoLineContainerHomePage">
            <div className="infoHomePage">
              • Погрузиться в историю города. Мы предоставим вам интересные
              факты и увлекательные истории о каждом месте, которое встретится
              на вашем маршруте.
            </div>{" "}
          </div>
          <div
            className="infoLineContainerHomePage"
            style={{ justifyContent: "end" }}
          >
            <div className="infoHomePage">
              • Сэкономить время и расширить свой кругозор. Используйте
              свободное время между занятиями с пользой и удовольствием!
            </div>{" "}
          </div>
        </div>
        <div className="title2HomePage" style={{ marginTop: "150px" }}>
          Начните свое путешествие прямо сейчас!
        </div>
        <Link
          to="/routes"
          style={{ textDecoration: "none" }}
          onClick={() => setTextProfileModalActive(2)}
        >
          <div className="btnStartRoutesHomePage">
            Go
            <svg
              style={{ marginTop: "-2px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9.33004C6 6.02005 8.35 4.66005 11.22 6.32005L15.84 9.00005C18.71 10.66 18.71 13.37 15.84 15.03L11.22 17.71C8.35 19.34 6 17.99 6 14.67V9.33004Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>{" "}
        </Link>
      </div>
      {profileModal && (
        <div className="profileModalHomePage">
          <ProfileModal
            textProfileModalActive={textProfileModalActive}
            setTextProfileModalActive={setTextProfileModalActive}
            setProfileModal={setProfileModal}
          />
        </div>
      )}
    </div>
  )
}
export default Home
