import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Exploration.css";
import MultiSelectEx1 from "../components/MultiSelectEx1";
import MultiSelectEx2 from "../components/MultiSelectEx2";
import MultiSelectEx3 from "../components/MultiSelectEx3";
import MultiSelectEx4 from "../components/MultiSelectEx4";
import MultiSelectEx5 from "../components/MultiSelectEx5";
import { Card,CardContent } from "semantic-ui-react";
import SankeyChart from "../components/SankeyGraph";

const Exploration = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/05-payment-sel");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/04-exploration");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/02-logging-cost");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/01-alert-summary");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/03-cost-analysis");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    
    <div className="exploration">
      
        <img className="downloadfilled-icon1" alt="" />
        <div className="autocomplete3">
        
          <div className="wrapper154">
          
          <div className="dimensional-relationships">
            Dimensional Relationships
          </div>
          <div>
          <Card style={{ position:'relative', minWidth: 1250, maxWidth:1300, minHeight:450, marginTop:200, marginLeft:-500}}>
            <CardContent>
              <div style={{marginLeft:150}}>
                <SankeyChart/>
              </div>
            
            </CardContent>
          </Card>
          </div>
          <div className="value22" style={{width:150, marginLeft:-200, marginTop:-600}}>Node1
              <MultiSelectEx1/>
              
            </div>
            <div className="value22" style={{width:200, marginLeft:-40, marginTop:-64}}>Table
          
              <MultiSelectEx2/>
            </div>
            <div className="value22" style={{width:150, marginLeft:190, marginTop:-64}}>Source System
          
              <MultiSelectEx3/>
            </div>
            <div className="value22" style={{width:150, marginLeft:350, marginTop:-64}}>Alert Rule
          
              <MultiSelectEx4/>
            </div>
            <div className="value22" style={{width:200, marginLeft:510, marginTop:-64}}>Incident
          
              <MultiSelectEx5/>
            </div>
            <div className="alignment15">
              <div className="basicmenu15">
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Azure</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">OpsManager</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container158">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Linux</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="autocomplete4">
          <div className="wrapper15">
            
            <div className="alignment15">
              <div className="basicmenu15">
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Azure</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">OpsManager</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container158">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Linux</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
        
        
          
          
       
        <div className="rectangle-parent35">
          <div className="group-child47" />
          <b className="source">Source</b>
          <div className="table6">Table</div>
          <div className="alert-rule">
            <p className="azure">Alert Rule</p>
          </div>
          <div className="incident">
            <p className="azure">Incident</p>
          </div>
          <div className="group-child48" />
          <div className="azure-527">
            <p className="azure">
              <b>Azure</b>
            </p>
            <p className="p">
              <span>52.7%</span>
            </p>
          </div>
          <div className="group-child49" />
          <div className="group-child50" />
          <div className="linux-171">
            <p className="azure">
              <b>Linux</b>
            </p>
            <p className="p">
              <span>17.1%</span>
            </p>
          </div>
          <div className="opsmanagement-302">
            <p className="azure">
              <b>OpsManagement</b>
            </p>
            <p className="p">
              <span>30.2%</span>
            </p>
          </div>
        </div>
        
          
          
          
          <div className="autocomplete7">
            
            
          </div>
          
        
        
      
      <div className="navbar6">
        <div className="navbar-child4" />
        <div className="button31" onClick={onButtonContainerClick}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix31.svg" />
            <div className="text121">Payment Sel.</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button32" onClick={onButtonContainer1Click}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix32.svg" />
            <div className="text122">Exploration</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button33" onClick={onButtonContainer2Click}>
          <div className="container40">
            <img className="prefix-icon31" alt="" src="../prefix33.svg" />
            <div className="text121">Ingestion Volume</div>
            <img className="prefix-icon31" alt="" src="../suffix10.svg" />
          </div>
        </div>
        <div className="button34" onClick={onButtonContainer3Click}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix34.svg" />
            <div className="text121">Alert Summary</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button35" onClick={onButtonContainer4Click}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix35.svg" />
            <div className="text121">Cost Analysis</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="ptimizer-parent4" onClick={onGroupContainer3Click}>
          <div className="ptimizer6">ptimizer</div>
          <img className="node-icon36" alt="" src="../node36.svg" />
          <img className="node-icon37" alt="" src="../node37.svg" />
          <img className="node-icon38" alt="" src="../node38.svg" />
          <img className="node-icon39" alt="" src="../node39.svg" />
          <img className="node-icon40" alt="" src="../node40.svg" />
          <img className="instance-child55" alt="" src="../line-5.svg" />
          <div className="instance-child56" />
          <img className="instance-child57" alt="" src="../line-76.svg" />
          <img className="instance-child58" alt="" src="../line-86.svg" />
          <img className="node-icon41" alt="" src="../node41.svg" />
          <img className="instance-child59" alt="" src="../line-92.svg" />
          <img className="instance-child60" alt="" src="../group-776.svg" />
          <img className="instance-child61" alt="" src="../group-866.svg" />
          <img className="instance-child62" alt="" src="../group-876.svg" />
          <div className="siem6">SIEM</div>
        </div>
      </div>
      <img
        className="downloadfilled-icon2"
        alt=""
        src="../downloadfilled1.svg"
       style={{marginLeft:10,marginTop:17}}/>
    </div>
    
  );
};

export default Exploration;
