---
title: "Configuring the Firewall on a VPS with UFW"
description: "A practical guide to setting up your virtual server's firewall using UFW (Uncomplicated Firewall)"
---

# Configuring the Firewall on a Virtual Server with UFW

UFW (Uncomplicated Firewall) is a simple and effective command-line tool for managing firewalls on Linux-based operating systems. In this guide, we will help you with the necessary steps for installing, configuring, and managing UFW.

## Installing UFW

First, you need to install UFW on your server. This tool is available in many Linux distributions. To install UFW on Ubuntu or Debian, run the following commands:
```bash
sudo apt update
sudo apt install ufw
```

## Enabling UFW

After installation, you need to enable UFW:
```bash
sudo ufw enable
```
::: tip Note
If your system uses IPv6, you must also configure IPv6 rules. To enable IPv6 support in UFW, edit the file `/etc/default/ufw` and change the value of `IPV6` to `yes`.
:::

::: warning Caution
This command may block your access to the server if you have not previously configured [access rules](#setting-access-rules) for SSH. It is recommended to set up the necessary [access rules](#setting-access-rules) before enabling UFW.
:::

## Setting Access Rules

### 1. Allowing SSH Access (Port 22)

To ensure you can connect to your server via SSH, run the following command:
```bash
sudo ufw allow ssh
```
Or more specifically:
```bash
sudo ufw allow 22/tcp
```
::: tip Note
If your SSH port has been changed (e.g., to port 2222), make sure to use the correct port number.
:::

### 2. Allowing Access to Other Services

To allow access to other services like HTTP and HTTPS, use the following commands:
- Allow HTTP:
  ```bash
  sudo ufw allow http
  ```
  Or:
  ```bash
  sudo ufw allow 80/tcp
  ```
- Allow HTTPS:
  ```bash
  sudo ufw allow https
  ```
  Or:
  ```bash
  sudo ufw allow 443/tcp
  ```

### 3. Blocking a Specific Port

To block a specific port, such as port 25 (SMTP), run the following command:
```bash
sudo ufw deny 25/tcp
```

### 4. Deleting Rules

Sometimes, you may need to delete rules that were added by mistake. Deleting rules in UFW is straightforward and can be done using one of the following methods:

#### **Method 1: Delete Rule by Number**
First, check the status of UFW and the list of active rules to identify the rule number:
```bash
sudo ufw status numbered
```
The output of this command will display the active rules along with their numbers. For example:
```
Status: active
  To                         Action      From
  --                         ------      ----
[1] 25                       ALLOW IN    Anywhere
[2] 80                       ALLOW IN    Anywhere
```
Now, specify the rule number (e.g., `[1]`) and delete it:
```bash
sudo ufw delete 1
```

#### **Method 2: Delete Rule Directly**
If you are certain about a specific rule (e.g., allowing port 25), you can delete it directly using the following command:
```bash
sudo ufw delete allow 25
```
::: tip Note
The word `delete` before `allow` is mandatory. If you only enter `ufw deny 25`, it will create a new rule to block port 25 but will not remove the previous rule.
:::

## Managing UFW

### 1. Disabling UFW

To disable UFW, run the following command:
```bash
sudo ufw disable
```
::: tip Note
Disabling UFW removes all current rules until you re-enable it.
:::

### 2. Reloading UFW

To apply changes to the rules, run the following command:
```bash
sudo ufw reload
```

### 3. Viewing UFW Status

To review the active rules of UFW, run the following command:
```bash
sudo ufw status verbose
```
The output of this command will display a list of active rules and the firewall status.

## Advanced UFW Settings

### 1. Setting Rules for a Specific IP

You can allow access to a port from a specific IP address only. For example, to allow SSH access only from a specific IP, run the following command:
```bash
sudo ufw allow from 192.168.1.100 to any port 22
```

### 2. Blocking Access from a Specific IP

To block access from a specific IP address, run the following command:
```bash
sudo ufw deny from 203.0.113.4
``` 
