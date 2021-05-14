import React from "react";
import PropTypes from "prop-types";
import CandidateList from "./CandidateList/CandidateList";
import CreateCanditate from "./CandidateList/CreateCandidate/CreateCandidate";

MainMenu.propTypes = {};

function MainMenu(props) {
  return (
    <div className="container__base__content__main" id="main">
      <div className="container__base__content__main__title">
        <h4>You need to hire</h4>
        <div className="container__base__content__main__title__action">
          <p>View all</p>
          <i className="fas fa-arrow-right" />
        </div>
      </div>

      <div className="container__base__content__main__jobs">
        <div className="job-detail">
          <p className="job-detail__number">2</p>

          <div className="job-detail__infor">
            <p>Project Manager</p>
            <span>10 candidates</span>
          </div>

          <div className="info">
            <div className="info_section">
              <section className="graph-circle">
                <div className="circle-graph-container">
                  <div
                    className="circle-graph1 easyPieChart"
                    data-percent="75"
                    // style={width: 55px; height: 55px; line-height: 555px;}
                  >
                    <p>75%</p>
                    <canvas
                    //   width="55"
                    //   height="55"
                    //   style="width: 55x; height: 55px;"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="job-detail">
          <p className="job-detail__number">3</p>

          <div className="job-detail__infor">
            <p>Content Manager</p>
            <span>7 candidates</span>
          </div>

          <div className="info">
            <div className="info_section">
              <section className="graph-circle">
                <div className="circle-graph-container">
                  <div className="circle-graph2 easyPieChart">
                    {/* data-percent="50" // style="width: 55px; height: 55px;
                    line-height: 555px;" */}
                    <p>50%</p>
                    <canvas
                    //   width="55"
                    //   height="55"
                    //   style="width: 55x; height: 55px;"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="job-detail">
          <p className="job-detail__number">1</p>

          <div className="job-detail__infor">
            <p>Senior UI/UX Designer</p>
            <span>3 candidates</span>
          </div>

          <div className="info">
            <div className="info_section">
              <section className="graph-circle">
                <div className="circle-graph-container">
                  <div className="circle-graph3 easyPieChart">
                    {/* // data-percent="0" // style="width: 55px; height: 55px;
                    line-height: 555px;" */}
                    <p>0%</p>
                    <canvas
                    //   width="55"
                    //   height="55"
                    //   style="width: 55x; height: 55px;"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="job-detail">
          <p className="job-detail__number">8</p>

          <div className="job-detail__infor">
            <p>javascripts Developer</p>
            <span>21 candidates</span>
          </div>

          <div className="info">
            <div className="info_section">
              <section className="graph-circle">
                <div className="circle-graph-container">
                  <div className="circle-graph4 easyPieChart">
                    {/* // data-percent="65" // style="width: 55px; height: 55px;
                    line-height: 555px;" */}
                    <p>65%</p>
                    <canvas
                    //   width="55"
                    //   height="55"
                    //   style="width: 55x; height: 55px;"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* <script>
      $(function () {
        $('.circle-graph1').easyPieChart({
          scaleColor: false,
          lineWidth: 5,
          lineCap: 'butt',
          barColor: '#ff6836',
          trackColor: '#cccccc',
          size: 55,
          animate: 800
        });


        $('.circle-graph2').easyPieChart({
          scaleColor: false,
          lineWidth: 5,
          lineCap: 'butt',
          barColor: '#56adff',
          trackColor: '#cccccc',
          size: 55,
          animate: 800
        });

        $('.circle-graph3').easyPieChart({
          scaleColor: false,
          lineWidth: 5,
          lineCap: 'butt',
          barColor: '#003A79',
          trackColor: '#cccccc',
          size: 55,
          animate: 800
        });

        $('.circle-graph4').easyPieChart({
          scaleColor: false,
          lineWidth: 5,
          lineCap: 'butt',
          barColor: '#00c8a1',
          trackColor: '#cccccc',
          size: 55,
          animate: 800
        });
      });
    </script> */}
      </div>

      <CandidateList />
    </div>
  );
}

export default MainMenu;
