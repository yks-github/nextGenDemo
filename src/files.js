import React from 'react'

class Files extends React.Component {
  render() {
    return (
      <div>
        <h1>Files</h1>

        <p>Files stored in the cloud are listed here:</p>
          <table style={{color:"green"}}>
          <tr>
            <td style={{width:"500px"}}>RC_Beam_calculation_model.rh</td>
            <td>Status: OK</td>
            <td><button>Delete</button></td>
          </tr>
          <tr>
            <td style={{width:"500px"}}>RC_Beam_calculation_grasshopper.gha</td>
            <td>Status: OK</td>
            <td><button>Delete</button></td>
          </tr>
          <tr>
            <td style={{width:"500px"}}>RC_Beam_calculation_Moments_Shears.gsa</td>
            <td>Status: OK</td>
            <td><button>Delete</button></td>
          </tr>
          <tr>
            <td style={{width:"500px"}}>RC_Beam_Report_generator.py</td>
            <td>Status: OK</td>
            <td><button>Delete</button></td>
          </tr>
          <tr>
            <td style={{width:"500px"}}>RC_Beam_Drawing.gha</td>
            <td>Status: OK</td>
            <td><button>Delete</button></td>
          </tr>
          </table>

        <hr />
        <p>This is where you upload your project files:</p>

        <form>
          <input type="file" name="img" multiple />
          <input type="submit" />
        </form>

      </div>
    )
  }
}
export default Files
