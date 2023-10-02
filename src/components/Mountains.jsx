import { useRef } from "react";
import PropTypes from "prop-types";
import "../styles/mountains.css";
import { useViewbox } from "../hooks/useViewbox";

export function Mountains({ level }) {
  const viewbox = useViewbox();
  const svgRef = useRef();

  const classes = {
    1: ["foreground", "midground", "background", "far-away"],
    2: ["transparent", "foreground", "midground", "background"],
    3: ["transparent", "transparent", "foreground", "midground"],
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewbox}
      ref={svgRef}
      className="mountains"
    >
      <path
        d="m8.827 968.616 36.707-48.756 90.788 23.958 128.617-46.655 88.896-41.927 107.496-32.154 112.539 33.731 54.221 27.74 116.007-35.306 70.613 58.003 150.053 18.915 108.436-26.48 97.1 21.436 109.7-16.392 176.53-58.004 127.36 50.438 110.96-32.785 65.57-32.784 102.14 54.22 74.39-16.392 63.05-31.524 156.36 13.871 133.66 44.133 166.44-17.653 112.37 20.836v564.035H8.827V968.616Z"
        className={`layer ${classes[level][3]}`}
        transform="translate(431.173 -467.055)"
      />
      <g className={`layer ${classes[level][2]}`}>
        <path
          d="m524.983 1000.27 106.891 51.36 126.094 31.52 319.022 44.14 195.44 17.65 296.33 1.26 266.06-21.44 219.4-89.52 64.31-58.007 73.13-83.222 26.48-79.44 51.7-27.741 31.53 55.482 54.22-63.048 69.35-80.7 36.44 68.254 42.98-86.443 25.13 86.939 31.91-110.335 77.35 142.366 25.24-71.449 91.82 130.758 73.99 77.044 41.38 51.617 89.18-41.677 91.78 82.552 98.88 88.81 84.36-20.05 95.21 32.96 470.35 35.88 497.29 60.75 262.16-2.23v185.9H-439.608v-381.74l62.112-34.49 76.129-54.565 43.956-58.589 105.802-103.989 45.915 64.521 53.22-55.58 31.659 22.659 36.649-60.883 19.217 49.161 12.05-45.047 23.652 9.943 32.785-46.655 41.611 37.829 26.48 51.698 26.48-60.525 25.218-71.874 39.09 102.137 59.264 56.742 30.263 79.44 39.761 35.275-.081-9.003.048-13.134-.19-10.337s.996-2.608 1.755-2.561c.758.048 2.37-45.662 2.37-45.662l.996-36.18 1.423.143 1.138-1.233 1.375-.569 1.47-1.565-.237-5.832.663-.759s-.331-24.989-.379-26.127c-.047-1.138 4.6-5.216 4.6-5.216l.569-22.523-.238-25.463s.143-6.591-2.607-8.345l-2.94-3.225 3.177-6.733.237-3.035.142-5.453.853-8.06.332-7.445s.095 9.152 1.565 7.16c1.47-1.991 1.375-2.323 1.47-4.505.095-2.181 0 15.885 2.703 16.691 2.703.806 1.375-25.036 1.375-25.036l.427-13.04.758-10.763.332-6.591.474-.19.759-8.63 1.66-2.371s-.38-3.888-1.138-3.888c-.759 0 1.327-2.703-1.944-2.466l.521-1.517.095-8.345s.996-1.897.237-2.893c-.759-.996.142-2.513.664-2.987.522-.474-1.565-5.69-3.224-2.229-1.66 3.462.663-2.134.663-2.134s.712-5.026 1.992-5.31c0 0-1.233-2.134 0-5.595 0 0 .332-.095 1.043-1.044.711-.948-1.043-5.168-2.703-4.267-1.659.901-1.232 1.09-1.232 1.09l.142-34.14s1.612 10.859 4.078 10.242c2.465-.616 2.987-4.599 2.987-4.599l-.047-10.337s-1.044-2.134-2.182-2.134c0 0 .143-2.75-.569-2.75 0 0 1.613-6.022.522-10.147-1.091-4.126-2.845-3.652-3.462-4.505-.616-.854-.047-4.979-4.172-3.556l-.996-16.075-.711-.047v-17.45s1.612 4.363 2.608 3.414c.995-.948 0-8.867-.19-8.724-.19.142.569-7.018.569-7.018l.332-8.061-.237-5.975 1.422-2.607.427-3.699.379-2.798-.189-13.134-.285-18.493.048-31.769 2.086 10.621 2.466 18.825s1.754 11.712 2.418 12.328l2.513 11.807 2.274 12.453s4.175 30.095 24.28 35.391l1.896-1.248.854-1.043s-.048 2.513 2.371-.095l.616-1.707s-.616 4.125 3.841 4.078c4.457-.048 8.677-5.121 9.815-6.686 1.138-1.565 9.436-13.893 9.247-15.079-.19-1.185 5.405-12.897 5.974-22.523s1.944-18.967 1.944-18.967l2.845-27.312.664 23.614.427 15.647.901 26.269.806 8.63s.901 4.979-.427 6.923l.237 5.453s.664 7.492-.237 10.954l-.142 5.642s1.717 5.833 4.552-.758l.986-4.458.19 16.976-.617 1.707-.142 16.738s-4.362-6.354-8.582 0c0 0-.048 14.794 1.564 21.812 0 0-2.276 1.327-.521 4.173 1.754 2.845 2.276-.048 2.418-1.423.142-1.375 1.138 34.472 1.138 34.472s-2.418-1.043-2.134.854c.285 1.896.142 3.129.142 3.129l-.948 1.328 1.091 2.371-.759 1.185s1.944 9.768-.19 9.578l1.186 15.127s-4.078-2.94-3.414 1.517l1.565 2.039.189 2.892.664 12.85 1.375 2.94s.427.664-.237 2.087c-.664 1.422 1.565 32.575 1.565 32.575l.758 8.014s1.565 3.888 2.94-1.47c1.375-5.359 2.276-15.933 2.276-15.933s.237 9.152 1.281 6.639c1.043-2.513 1.28-8.488 1.28-9.246 0-.759.047 13.608.237 14.983s.237 10.574 1.043 11.712c.806 1.138.996 3.272 2.039 4.458 0 0-4.362 3.082-3.651 4.552 0 0-1.375 10.953-.569 14.746l-.095 41.158.048 12.234s1.232 2.371 2.797 3.035c1.565.664 1.423-1.091 1.755-1.612l-.095 9.341.047 18.777.332 48.081.379 40.304 5.074 10.669s.047 3.272-.664 2.798c0 0-1.043 3.224.474 3.509l.101 15.249s-1.744 10.478 1.846 8.118c3.589-2.359 4.024-2.96 4.024-2.96l1.948-2.998.512 3.844-.071 4.448s-4.744 4.158-3.143 6.724c1.601 2.565 3.303 6.685 5.723 5.235 0 0-1.351 3.284 4.182 1.854 0 0-.099 7.041.942 7.245 1.041.204 3.379 6.832 2.711 6.77-.668-.063.567 2.732-2.022 2.999 0 0 .948 9.648-1.358 9.168Z"
          transform="matrix(1 0 0 1 439.609 -414.139)"
        />
        <path
          d="m1065.59 223.721-19.53 6.097s-9.38 22.617-42.52 28.936c-33.128 6.318-38.912 2.456-51.599-1.11-12.687-3.565-29.874-15.98-34.801-21.082-4.927-5.101-28.206-22.06-28.206-22.06s-8.676-9.001-17.022-9.815l-1.135-6.506s32.964-4.913 38.85-18.814c5.885-13.9 17.855-41.069 67.94-36.851 50.083 4.218 69.763 33.97 70.773 41.827 0 0-1.83 18.125 18.36 22.867"
          transform="matrix(.31644 0 0 .30899 586.146 -10.747)"
          className="eye"
        />
        <path
          d="M986.464 168.622s20.566 16.945 1.124 58.204c0 0-6.428-7.201-5.527-28.186 0 0 .953-23.926 4.403-30.018Z"
          transform="matrix(.31644 0 0 .30899 587.981 -12.929)"
          className="pupil"
        />
      </g>
      <path
        d="m7.009 1073.58 68.634-41.66 102.893-25.21 84.735 48.42 122.06-53.47 106.928 27.24 89.779 37.32 129.121-57.5 143.618-50.798 149.933 69.968 105.92 28.24 167.04-72.477 194.18 49.997 226.96-56.427 189.57-41.13 204.78 70.617 129.12 22.19 208.81-44.387 109.51-40.875 45.09 25.971 86.39 47.181 129.25-51.67 68.8 70.85 191.94-87.367 124.05 41.271 56.15-18.682 110.2 23.202 167.36-29.329 132.54-41.107 183.21 80.012 127.18-69.458 187.49 69.458 143.18-31.27 81.6-81.748 86.71 2.593 95.93 39.463V1564H-442.332v-528.93l77.011 30.35 104.467-26.73 160.435-2.4 107.428 37.29Z"
        className={`layer ${classes[level][1]}`}
        transform="translate(442.332 -567.931)"
      />
      <path
        d="M4560 1564H-440v-367.17l51.217-41.13 54.769-37.42 61.856 33.51 79.86-33.77 67.589-44.15 111.079 57.9 95.034 48.34 60.908 1.87 68.825-49.04 101.916-36.92 111.18 85.96 112.504 27.87 108.533-27.87 103.239-54.85 97.944 82.72 124.416-112.5 105.891 84.63 86.03-13.16 68.82 25.15 92.65-43.68 64.86-54.34 99.27 140.37 76.76-54.34 60.33-6.53 83.94-48.32 120.45-64.34 168.09 91.33 113.83-9.2 90-64.78 164.13 46.99 79.41 40.37 72.11-49.48 85.96 30.05 178.14-36.9 156.68 1.03 93.99-61.3 81.15 62.96 127.3-41.7 155.31-29.3 209.71 75.66 150.05-35.41 145.12 9.31 159.02-40.58 95.79 71.89 203.44-69.15 200.9 72.98V1564Z"
        className={`layer ${classes[level][0]}`}
        transform="translate(440 -567.931)"
      />
    </svg>
  );
}

Mountains.propTypes = {
  level: PropTypes.number,
  timeline: PropTypes.object,
};
