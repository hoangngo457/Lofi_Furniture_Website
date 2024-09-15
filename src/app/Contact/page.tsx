"use client";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/contact.css";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Breadcrumb_Layout from "../components/Breadcrumb_Layout";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";

const Contact = () => {
  const contact = useTranslations("ContactPage");

  return (
    <div>
      <Breadcrumb_Layout />
      <Container>
        <div className="row contact-under">
          <div className="col-sm-6">
            <div className="box-ggmaps">
              <iframe
                className="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4796978279383!2d106.6093968759712!3d10.851072530255234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a3a553b5241%3A0x6da3f35fee914f3b!2zMzYvNUEgVOG7lSA0MywgVHJ1bmcgTeG7uSBUw6J5LCBRdeG6rW4gMTIsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1726118537187!5m2!1svi!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-sm-6 information-contact">
            <div className="contact-box1">
              <h4 className="h4-title1 pb-2">{contact("title-contact")}</h4>
              <div className="col-sm pb-2">
                <div>
                  <b>
                    <PlaceIcon
                      sx={{
                        lineHeight: 22.25,
                        fontSize: 25,
                        paddingBottom: 0.9,
                      }}
                    />
                    {contact("location")}:
                  </b>
                  <span> 266 Đội Cấn, P. Liễu Giai, Q. Ba Đình, TP Hà Nội</span>
                </div>
                <div className="contact-lh">
                  <EmailIcon
                    sx={{
                      lineHeight: 22.25,
                      fontSize: 25,
                      paddingBottom: 0.9,
                    }}
                  />
                  <b>Email:</b>{" "}
                  <a href="mailto:nhoxtuananh092@gmail.com"> support@lofi.vn</a>
                </div>
                <div className="contact-lh">
                  <PhoneIcon
                    sx={{
                      lineHeight: 22.25,
                      fontSize: 25,
                      paddingBottom: 0.9,
                    }}
                  />
                  <b>{contact("phone")}:</b>
                  <a href="tel:0399121048"> 0399121048</a>
                </div>
              </div>

              <h4 className="h4-title2 pb-2">{contact("title-contact2")}</h4>
              <div className="col-sm">
                <div className="pb-2">{contact("content")}</div>

                <div className="form-input-contact mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={contact("name")}
                  />
                </div>
                <div className="mb-3 form-input-contact">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 form-input-contact">
                  <input
                    type="phone"
                    className="form-control"
                    placeholder={contact("phone2")}
                  />
                </div>
                <div className="mb-3 form-input-contact">
                  <textarea
                    className="form-control"
                    placeholder={contact("content2")}
                    rows={5}
                  ></textarea>
                </div>

                <div className="button-lienhe">
                  <button className="btn-lienhe" type="submit">
                    {contact("send")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Contact;
