import React from "react";
import classNames from "classnames";
import { Button } from "antd";

export default function SocialIcons({ className, type = "link", shape }) {
  return (
    <ul className={`social-icons ${classNames(className)}`}>
      <li>
        <Button type={type} shape={shape} href="https://www.facebook.com/atacadootico/">
          <i className="fab fa-facebook-f"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="https://www.instagram.com/atacado_optico/">
          <i className="fab fa-instagram"></i>
        </Button>
      </li>
    </ul>
  );
}
