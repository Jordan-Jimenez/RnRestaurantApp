import * as React from 'react';

import Svg, { Path } from 'react-native-svg';

interface IDeliveryOrderIconProps {
  fill?: string;
  size?: 'default' | 'small';
}

const DeliveryOrderIcon: React.FC<IDeliveryOrderIconProps> = ({
  size = 'default',
  fill = '#000',
}) => (
  <>
    {size === 'default' ? (
      <Svg
        width={76}
        height={76}
        viewBox={`0 0 ${76} ${49}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M68 40a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM24.25 40a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
          fill={fill}
        />
        <Path
          d="M75.5 33.75a7.507 7.507 0 0 0-7.5-7.5h-1.25v-2.5a1.25 1.25 0 0 0-.947-1.213l-5-1.25-.003.012a13.272 13.272 0 0 0-2.952-4.468l-.58-.581 1.25-1.25h3.232a1.25 1.25 0 0 0 1.16-.786l2.5-6.25a1.25 1.25 0 0 0-1.16-1.714h-7.801a6.151 6.151 0 0 0-2.749.648l-.764-2.293a1.25 1.25 0 0 0-1.186-.855h-.904l.814-2.036a1.25 1.25 0 0 0-2.32-.928l-2.5 6.25a1.25 1.25 0 0 0 2.32.928l.686-1.714h1.003l.774 2.324a6.09 6.09 0 0 0-1.235 2.676H48a1.25 1.25 0 0 0 0 2.5h2.417c.143.653.392 1.278.736 1.852l.687 1.144A23.866 23.866 0 0 1 51.702 30H40.526a9.404 9.404 0 0 1 2.761-7.27l.597-.596c.234-.235.364-.553.363-.884h.003v-2.5A3.756 3.756 0 0 0 40.5 15H29.25c-.426 0-.849.072-1.25.215V6.25C28 5.56 27.44 5 26.75 5H9.25C8.56 5 8 5.56 8 6.25H5.5v2.5H8v2.5H3v2.5h5v2.5H5.5v2.5H8v2.5c0 .69.56 1.25 1.25 1.25h10.1a16.385 16.385 0 0 0-3.065 2.5H10.5v2.5h3.812A16.246 16.246 0 0 0 13 30.002V30H8v2.5h4.188a16.223 16.223 0 0 0-.438 3.75c0 .69.56 1.25 1.25 1.25h1.614A8.752 8.752 0 0 0 23 48.75a8.75 8.75 0 0 0 8.386-11.25H54.25c0 .69.56 1.25 1.25 1.25h2.59a8.751 8.751 0 0 0 16.833 4.373A8.75 8.75 0 0 0 73.931 35h.319c.69 0 1.25-.56 1.25-1.25Zm-11.25-9.024v1.595c-.859.095-1.703.29-2.517.58a13.514 13.514 0 0 0-.165-2.845l2.682.67ZM60.903 12.5H59.25V8.75h3.153l-1.5 3.75Zm-5.82-3.487a3.654 3.654 0 0 1 1.366-.263h.301v4.482L54.982 15h-1.274l-.411-.684c-.108-.18-.2-.37-.276-.567A1.25 1.25 0 0 0 53 11.25h-.033a3.668 3.668 0 0 1 2.117-2.237ZM25.5 20h-10v-7.5h10V20Zm-15-12.5h15V10H14.25c-.69 0-1.25.56-1.25 1.25V20h-2.5V7.5ZM28 18.75c.001-.69.56-1.25 1.25-1.25H40.5c.69 0 1.25.56 1.25 1.25V20H28v-1.25ZM33 35H14.341A8.76 8.76 0 0 1 23 27.5h6.25A3.757 3.757 0 0 1 33 31.25V35Zm-3.75 5a6.25 6.25 0 1 1-11.976-2.5h11.453c.345.788.523 1.64.523 2.5Zm6.25-5v-3.75A6.256 6.256 0 0 0 29.25 25H23c-1.27 0-2.533.215-3.732.639A13.683 13.683 0 0 1 28 22.5h12.22a11.954 11.954 0 0 0-.808 12.5H35.5Zm5.536-2.5h9.759l-.133.308L49.687 35h-7.33a9.477 9.477 0 0 1-1.322-2.5ZM52.423 35l.523-1.176a26.37 26.37 0 0 0 1.657-16.325h.379l1.098 1.099a10.807 10.807 0 0 1 2.975 9.688A11.275 11.275 0 0 0 54.533 35l-2.11.001Zm13.076-6.25H68a5.01 5.01 0 0 1 4.843 3.75h-3.29a13.953 13.953 0 0 0-9.556 3.75h-3.157a8.76 8.76 0 0 1 8.66-7.5ZM73 40a6.248 6.248 0 0 1-6.881 6.215 6.248 6.248 0 0 1-5.491-7.472c.285-.029.553-.156.756-.36A11.48 11.48 0 0 1 69.553 35h.946a6.24 6.24 0 0 1 2.5 5ZM.5 6.25H3v2.5H.5v-2.5Z"
          fill={fill}
        />
        <Path
          d="M5.5 25H8v2.5H5.5V25ZM.5 25H3v2.5H.5V25ZM3 30h2.5v2.5H3V30Z"
          fill={fill}
        />
      </Svg>
    ) : (
      <Svg
        width={38}
        height={25}
        viewBox="0 0 38 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M34 20.5C34 20.8452 33.7201 21.125 33.375 21.125C33.0299 21.125 32.75 20.8452 32.75 20.5C32.75 20.1549 33.0299 19.875 33.375 19.875C33.7201 19.875 34 20.1549 34 20.5Z"
          fill={fill}
        />
        <Path
          d="M12.125 20.5C12.125 20.8452 11.8451 21.125 11.5 21.125C11.1549 21.125 10.875 20.8452 10.875 20.5C10.875 20.1549 11.1549 19.875 11.5 19.875C11.8451 19.875 12.125 20.1549 12.125 20.5Z"
          fill={fill}
        />
        <Path
          d="M37.75 17.375C37.7489 16.3809 37.3535 15.4277 36.6504 14.7247C35.9472 14.0216 34.9941 13.6262 34 13.625H33.375V12.375C33.375 12.0882 33.1797 11.8382 32.9015 11.7687L30.4015 11.1437L30.4001 11.1496C30.065 10.3122 29.5628 9.55221 28.9241 8.9155L28.6337 8.62504L29.2589 8.00004H30.875C31.1306 8.00004 31.3605 7.84435 31.4554 7.60718L32.7054 4.48218C32.7824 4.28966 32.7589 4.07147 32.6426 3.8996C32.5262 3.728 32.3323 3.62504 32.125 3.62504H28.2244C27.8315 3.62476 27.4423 3.69982 27.0776 3.84602C26.9997 3.877 26.9244 3.91215 26.8502 3.94898L26.4679 2.80248C26.3828 2.54718 26.144 2.37502 25.875 2.37502H25.423L25.8301 1.35717H25.8304C25.9584 1.03657 25.8025 0.673017 25.4822 0.544667C25.1616 0.416595 24.798 0.572568 24.6697 0.892881L23.4197 4.01788C23.2916 4.33847 23.4476 4.70203 23.7679 4.83038C24.0885 4.95845 24.452 4.80248 24.5804 4.48217L24.923 3.62503H25.4244L25.8117 4.78688C25.4995 5.17555 25.2874 5.6351 25.1942 6.12503H24C23.6549 6.12503 23.375 6.40488 23.375 6.75003C23.375 7.09517 23.6549 7.37503 24 7.37503H25.2084C25.2801 7.70148 25.4046 8.01425 25.5767 8.3011L25.9199 8.87308C26.5232 11.0442 26.4992 13.3418 25.851 15.5H20.2631C20.1775 14.1459 20.6806 12.8209 21.6437 11.8652L21.942 11.567C22.0589 11.4495 22.1242 11.2904 22.1236 11.125H22.125V9.87499C22.1245 9.37778 21.9266 8.9012 21.5754 8.54963C21.2238 8.19835 20.7472 8.00052 20.25 7.99997H14.625C14.4121 7.99997 14.2006 8.03624 14 8.10739V3.62496C14 3.27982 13.7201 2.99996 13.375 2.99996H4.625C4.27986 2.99996 4 3.27982 4 3.62496H2.75V4.87496H4V6.12496H1.5V7.37496H4V8.62496H2.75V9.87496H4V11.125C4 11.4701 4.27986 11.75 4.625 11.75H9.67464C9.11549 12.1032 8.601 12.5228 8.14257 13H5.25V14.25H7.156C6.90154 14.647 6.68195 15.0655 6.50003 15.5008V15.5H4.00003V16.75H6.09374C5.94809 17.3644 5.87471 17.9936 5.87499 18.625C5.87499 18.9701 6.15485 19.25 6.49999 19.25H7.30721C6.91268 20.5739 7.16658 22.0067 7.99219 23.1144C8.81805 24.2221 10.1183 24.8748 11.5 24.8748C12.8816 24.8748 14.1819 24.2221 15.0078 23.1144C15.8334 22.0067 16.0873 20.574 15.6928 19.25H27.1249C27.1249 19.5951 27.4048 19.875 27.7499 19.875H29.0451C28.8384 21.308 29.3543 22.7506 30.4226 23.7279C31.4913 24.7051 32.974 25.0901 34.383 24.7566C35.792 24.4232 36.9446 23.414 37.4617 22.0613C37.9784 20.7089 37.7929 19.1883 36.9656 18H37.1249C37.4701 18 37.7499 17.7201 37.7499 17.375L37.75 17.375ZM32.125 12.863V13.6607V13.6605C31.6956 13.7082 31.2734 13.8055 30.8664 13.9504C30.8717 13.8421 30.875 13.7336 30.875 13.625C30.8745 13.2573 30.844 12.8904 30.7838 12.5277L32.125 12.863ZM30.4517 6.75002H29.625V4.87502H31.2017L30.4517 6.75002ZM27.5419 5.00644C27.7589 4.91939 27.9905 4.87474 28.2243 4.87503H28.375V7.1161L27.4911 8.00003H26.8538L26.6485 7.65795H26.6487C26.5946 7.56755 26.5483 7.47268 26.5103 7.37447C26.8533 7.36889 27.1275 7.08764 27.1247 6.74472C27.1219 6.40153 26.8429 6.12502 26.5 6.12502H26.4833C26.6549 5.61498 27.0419 5.20595 27.5418 5.00645L27.5419 5.00644ZM12.7497 10.5H7.74972V6.75002H12.7497V10.5ZM5.24972 4.25002H12.7497V5.50002H7.12472C6.77958 5.50002 6.49972 5.77987 6.49972 6.12502V10.5H5.24972V4.25002ZM13.9997 9.87502C14 9.52987 14.2796 9.25029 14.6247 9.25002H20.2497C20.5949 9.25029 20.8744 9.52987 20.8747 9.87502V10.5H13.9997V9.87502ZM16.4997 18H7.17043C7.32194 16.9593 7.84259 16.0078 8.6375 15.3195C9.43243 14.6309 10.4484 14.2514 11.4999 14.25H14.6249C15.1221 14.2506 15.5987 14.4484 15.9503 14.7997C16.3016 15.1512 16.4994 15.6278 16.5 16.125L16.4997 18ZM14.6247 20.5C14.6253 21.4412 14.2014 22.3323 13.4715 22.9261C12.7413 23.5198 11.7824 23.7531 10.861 23.5609C9.93993 23.3683 9.15422 22.7712 8.72258 21.935C8.29093 21.0985 8.2594 20.1124 8.63636 19.25H14.3632H14.3629C14.5354 19.6442 14.6244 20.0698 14.6247 20.5L14.6247 20.5ZM17.7497 18V16.125C17.7489 15.2966 17.4194 14.5022 16.8334 13.9163C16.2475 13.3304 15.4531 13.0009 14.6247 13H11.4997C10.8641 12.9997 10.233 13.1077 9.63365 13.3195C10.8616 12.3039 12.4059 11.7486 13.9997 11.75H20.1099C19.471 12.6524 19.0946 13.7143 19.0231 14.8178C18.9517 15.9213 19.188 17.0229 19.7056 18L17.7497 18ZM20.5173 16.75H25.397C25.375 16.8014 25.3532 16.853 25.3306 16.904L24.8434 18H21.1783C20.8968 17.6189 20.6738 17.1973 20.5173 16.75L20.5173 16.75ZM26.2115 18L26.4729 17.4118C27.6102 14.8485 27.9004 11.9894 27.3017 9.2497H27.4908L28.0399 9.79881C29.3092 11.0667 29.8664 12.8817 29.5274 14.6431C28.3842 15.4436 27.5787 16.6395 27.2665 17.9997L26.2115 18ZM32.7497 14.875H33.9997C34.5538 14.8759 35.0921 15.0603 35.5302 15.3996C35.9682 15.7389 36.2813 16.2137 36.4208 16.75H34.7763C33.0032 16.745 31.2944 17.4155 29.9979 18.625H28.4194C28.5709 17.5843 29.0919 16.6328 29.8868 15.9445C30.682 15.2559 31.6982 14.8764 32.7498 14.875L32.7497 14.875ZM36.4997 20.5C36.4994 21.3837 36.125 22.2257 35.4693 22.8178C34.8136 23.4102 33.938 23.697 33.0589 23.6077C32.1799 23.5184 31.3797 23.0614 30.8566 22.3494C30.3334 21.6373 30.1359 20.7372 30.3133 19.8717C30.4562 19.8572 30.5898 19.7935 30.6917 19.692C31.7726 18.6052 33.2436 17.9958 34.7762 18H35.2495C36.0371 18.5895 36.5006 19.5162 36.4998 20.5L36.4997 20.5Z"
          fill={fill}
        />
        <Path d="M0.25 3.625H1.5V4.875H0.25V3.625Z" fill={fill} />
        <Path d="M2.75 13H4V14.25H2.75V13Z" fill={fill} />
        <Path d="M0.25 13H1.5V14.25H0.25V13Z" fill={fill} />
        <Path d="M1.5 15.5H2.75V16.75H1.5V15.5Z" fill={fill} />
      </Svg>
    )}
  </>
);

export default DeliveryOrderIcon;
