import React, { Component } from "react";
import {
  Button,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TextField,
} from "@material-ui/core";
import "./Styles/Grids.css";

class GridViews extends Component {
  state = {
    configs: [
      { id: 1, name: "Config 1", key: 1 },
      { id: 2, name: "Config 2", key: 2 },
      { id: 3, name: "Config 3", key: 3 },
      { id: 4, name: "Config 4", key: 4 },
      { id: 5, name: "Config 5", key: 5 },
      { id: 6, name: "Config 6", key: 6 },
      { id: 7, name: "Config 7", key: 7 },
    ],
    Seqs: [
      { id: 1, name: "Seq 1", key: 11, config: 1 },
      { id: 2, name: "Seq 2", key: 22, config: 1 },
      { id: 3, name: "Seq 3", key: 33, config: 3 },
      { id: 4, name: "Seq 4", key: 44, config: 4 },
      { id: 5, name: "Seq 5", key: 55, config: 3 },
      { id: 6, name: "Seq 6", key: 66, config: 2 },
      { id: 7, name: "Seq 7", key: 77, config: 5 },
    ],

    isVisible: false,
    currentConfig: 0,
    currentConfigName: "Ex. Configuration",
    currentSeqName: "Ex. Sequence",
  };
  render() {
    return (
      <div>
        <Table>
          <div className="configTextField">
            <TextField
              id="configName"
              label={this.state.currentConfigName}
            ></TextField>
          </div>
          <div className="gridContainerConfigs">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span style={{ fontSize: "15px", marginLeft: "20px" }}>
                    ID
                  </span>
                </TableCell>
                <TableCell>
                  <span style={{ fontSize: "15px", marginLeft: "20px" }}>
                    Name
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.configs.map((config) => (
                <TableRow>
                  <TableCell>
                    <span style={{ fontSize: "15px", marginLeft: "20px" }}>
                      {config.id}
                    </span>
                  </TableCell>
                  <TableCell
                    onClick={this.setVisisble.bind(null, true, config)}
                  >
                    <Button>
                      <span style={{ fontSize: "15px", marginLeft: "20px" }}>
                        {config.name}
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </div>
        </Table>
        <div>
          <span>
            <Table>
              <div className="seqTextField">
                <TextField
                  id="SeqName"
                  label={this.state.currentSeqName}
                ></TextField>
              </div>
              <div className="gridContainerSeqs">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.Seqs.map(
                    (Seq) =>
                      Seq.config === this.state.currentConfig && (
                        <TableRow>
                          <TableCell>{Seq.id}</TableCell>
                          <TableCell
                            onClick={this.setVisisble.bind(
                              null,
                              true,
                              null,
                              Seq
                            )}
                          >
                            <Button>{Seq.name}</Button>
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </div>
            </Table>
          </span>
        </div>
      </div>
    );
  }

  setVisisble = (bool, config, seq) => {
    if (config != null) {
      this.setState({
        isVisible: bool,
        currentConfig: config.id,
        currentConfigName: config.name,
      });
    } else {
      this.setState({
        currentSeqName: seq.name,
      });
    }
  };

  setName = (bool, seq) => {
    this.setState({
      currentSeqName: seq.name,
    });
  };
}

export default GridViews;
