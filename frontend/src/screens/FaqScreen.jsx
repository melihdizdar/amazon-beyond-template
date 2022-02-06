/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function FaqScreen() {
    return (
      <>
        <section className="uk-section uk-background-primary">
            <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                <h4 className="uk-margin-remove">FAQ</h4>
                <h1 className="uk-margin-remove">I have a question for you?</h1>
            </div>
        </section>
        <section className="uk-section">
          <div className="uk-container">
            <ul className="uk-light" uk-accordion="collapsible: true;" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
              <li className="uk-open">
                  <a className="uk-accordion-title accordion-class" href="#">How long have you been in business?</a>
                  <div className="uk-accordion-content accordion-class uk-margin-remove">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla purus eget enim bibendum vestibulum. Morbi sit amet ultricies nibh. Vivamus quam est, ullamcorper eu interdum quis, malesuada sed magna. Cras nec eros eget orci ornare dignissim. Donec ac turpis quis nisi varius imperdiet in in erat.</p>
                  </div>
              </li>
              <li>
                  <a className="uk-accordion-title accordion-class" href="#">What makes you different from your competitors?</a>
                  <div className="uk-accordion-content accordion-class uk-margin-remove">
                      <p>Donec euismod sollicitudin sollicitudin. Cras consectetur nisi auctor augue gravida imperdiet. Duis efficitur maximus nunc ut porta. Curabitur egestas metus lacus. Nulla viverra orci mi, vel maximus nisl facilisis in. Aliquam blandit rutrum tortor sed lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat porta hendrerit. Nunc vulputate accumsan mollis. Cras eget metus at ex lobortis tempus vitae eget neque.</p>
                  </div>
              </li>
              <li>
                  <a className="uk-accordion-title accordion-class" href="#">From where do you operate?</a>
                  <div className="uk-accordion-content accordion-class uk-margin-remove">
                      <p>Curabitur dapibus dui eu massa gravida, ac luctus lorem tincidunt. Mauris urna lorem, volutpat eget turpis quis, hendrerit rutrum turpis. Pellentesque imperdiet, ipsum rutrum dapibus vehicula, eros nisl porta purus, nec fringilla sapien dolor vitae libero. Proin varius imperdiet est ac facilisis.</p>
                  </div>
              </li>
              <li>
                  <a className="uk-accordion-title accordion-class" href="#">Where are your packages shipped from?</a>
                  <div className="uk-accordion-content accordion-class uk-margin-remove">
                      <p>Integer justo ipsum, bibendum ac volutpat vitae, hendrerit sed lectus. Ut luctus diam augue, eu cursus orci sagittis eget. In vehicula venenatis quam, sit amet congue quam. Mauris sed nisi eleifend, fermentum ipsum non, ultricies lectus. Morbi accumsan dictum tellus, vel cursus sapien gravida vel.</p>
                  </div>
              </li>
              <li>
                  <a className="uk-accordion-title accordion-class" href="#">What payment methods do you accept?</a>
                  <div className="uk-accordion-content accordion-class uk-margin-remove">
                      <p>Vestibulum eu convallis eros. Vestibulum in leo non nunc cursus hendrerit pretium eu lectus. Morbi felis nisl, posuere ut nisl eget, varius sollicitudin nibh. Sed consectetur mi nisl, ac ultricies quam pharetra et. Vestibulum eros nisl, laoreet eget elementum et, commodo quis nibh. Donec malesuada tellus sit amet lectus ornare, nec tempor augue laoreet. Sed sit amet ipsum in erat luctus efficitur. Proin eros arcu, tincidunt sit amet leo id, sodales ultrices purus.</p>
                  </div>
              </li>
              <li>
                  <a className="uk-accordion-title accordion-class" href="#">Do you offer lay-bys? If so, can you provide a link to your terms and conditions?</a>
                  <div className="uk-accordion-content accordion-class uk-margin-remove">
                      <p>Cras ligula dolor, convallis ut lectus eget, vulputate facilisis lacus. Ut feugiat, urna sit amet auctor sodales, sem sem dapibus orci, in posuere nibh est at sem. Suspendisse nulla nulla, pulvinar pulvinar accumsan nec, varius in ligula. In hac habitasse platea dictumst. Mauris eget velit nec tellus suscipit vestibulum ut id dolor.</p>
                  </div>
              </li>
              <li>
                  <a className="uk-accordion-title accordion-class" href="#">If you accept bank transfer, how long do customers have to make the payment before their order is cancelled and items returned to stock?</a>
                  <div className="uk-accordion-content accordion-class uk-margin-remove">
                      <p>Quisque porta fringilla diam a blandit. Nulla ac egestas lorem. Proin aliquet feugiat turpis non vehicula. Donec dignissim sed orci laoreet tempus.</p>
                  </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    )
}
