import React from "react";

import { Button, Card, Container, Row, Alert } from "react-bootstrap";

const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    // '{ "token_metadata": { "title": "Olympus Mons", "description": "Tallest mountain in charted solar system", "media": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Olympus_Mons_alt.jpg/1024px-Olympus_Mons_alt.jpg", "copies": 1}}' --accountId $ID --deposit 0.1
    await window.contract.nft_mint({
      token_id: `${window.accountId}--your-new-token`,
      receiver_id: window.accountId,
      metadata: {
        "title": "Olympus Mons",
        "description": "Hey you just minted an Olympus mons nft",
        "media": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Olympus_Mons_alt.jpg/1024px-Olympus_Mons_alt.jpg",
        "copies": 1,
      },
    },
     300000000000000,
     //
     new BN("1000000000000000000000000")
   );
  };

  return (
    <Card style={{ padding: "2vh" }}>
      <Container>
        <Row style={{ marginBottom: "2vh" }}>
          <p>
            Step 2: After you have logged in, hit this button to mint your "Go
            Team" Token and go your{" "}
            <a href='https://wallet.testnet.near.org/'> wallet</a> and see your
            NFT
          </p>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            style={{ width: "50vw" }}
          >
            Mint NFT
          </Button>
        </Row>
        <Row className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <Alert variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                bruh/sis.... You have an NFT already. You can see it{" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
        </Row>
      </Container>
    </Card>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
