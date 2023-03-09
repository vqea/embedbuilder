import React from "react";

export default class Header extends React.PureComponent {
  render = () => (
    <header>
      <div id="back-to-home">
        <a href="https://vqea.github.io">&larr;</a>
      </div>
      <div title="vqea.github.io">vqea.github.io</div>
    </header>
  );
}
