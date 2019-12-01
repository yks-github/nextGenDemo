import React from 'react'

class Environment extends React.Component {
  render() {
    return (
      <div>
        <h1>Environment</h1>
        <p>This is where you define the cloud environment required for your workflow to run.</p>
        <ul>
          <li>
            <label>Operating System</label>
            <select name="operatingSystem">
              <option value="windowsServer">Windows server 2008 SP 1</option>
              <option value="windows7">Windows 7</option>
              <option value="amazonLinux2012">Amazon Linux 2012</option>
              <option value="centOSLinux5">CentoS Linux 5</option>
              <option value="oracleLinus5">Oracle Linus 5</option>
              <option value="redHatEnterpriseLinuxServer5">Red Hat Enterprise Linux Server 5</option>
              <option value="debianGNU">Debian GNU/Linux 6</option>
              <option value="Ubuntu12">Ubuntu12</option>
            </select>
          </li>
          <li>
            <label>RAM</label>
            <select name="operatingSystem">
              <option value="ram128MB">128 MB</option>
              <option value="ram256MB">256 MB</option>
              <option value="ram512MB">512 MB</option>
              <option value="ram1024MB">1024 MB</option>
              <option value="ram2048MB">2048 MB</option>
            </select>
          </li>
          <li>
            <label>CPU speed</label>
            <select name="operatingSystem">
              <option value="cpu1Core">1 Core</option>
              <option value="ram2Core">2 Core</option>
              <option value="ram4Core">4 Core</option>
              <option value="ram8Core">8 Core</option>
            </select>
          </li>
          <li>Etc..
          </li>
        </ul>
        <hr />
        <p>Active servers are listed here:</p>
          <table style={{color:"green"}}>
          <tr>
            <td style={{width:"100px"}}>Server 1</td>
            <td style={{width:"100px"}}>Status: OK</td>
            <td style={{width:"100px"}}><button>Restart</button></td>
          </tr>
          <tr>
            <td style={{width:"100px"}}>Server 2</td>
            <td style={{width:"100px"}}>Status: OK</td>
            <td style={{width:"100px"}}><button>Restart</button></td>
          </tr>
          <tr>
            <td style={{width:"100px"}}>Server 3</td>
            <td style={{width:"100px"}}>Status: OK</td>
            <td style={{width:"100px"}}><button>Restart</button></td>
          </tr>
          <tr>
            <td style={{width:"100px"}}>Server 4</td>
            <td style={{width:"100px"}}>Status: OK</td>
            <td style={{width:"100px"}}><button>Restart</button></td>
          </tr>
        </table>
      </div>
    )
  }
}
export default Environment
