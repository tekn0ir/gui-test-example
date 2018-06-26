FROM debian:stable

ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true

# Set timezone
RUN echo "Europe/Stockholm" > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

RUN apt-get -qqy update \
  && apt-get -qqy --no-install-recommends install \
    curl \
    wget \
    build-essential \
    ca-certificates \
    unzip \
    gnupg

RUN update-ca-certificates

# install chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
	dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

## install chromedriver and place it in path
#RUN wget https://chromedriver.storage.googleapis.com/2.37/chromedriver_linux64.zip && \
#	unzip chromedriver_linux64.zip && \
#	mv -f chromedriver /usr/local/share/ && \
#    chmod +x /usr/local/share/chromedriver && \
#    ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver && \
#    chromedriver -v

# install node
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get -qqy update && apt-get -qqy --no-install-recommends install nodejs

WORKDIR /tests
VOLUME /tests
