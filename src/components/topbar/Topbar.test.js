import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Topbar from "./Topbar";


test("logo should be rendered", () => {
    render(<Topbar />);
    const topbarLogoEl = screen.getByAltText(/To do app Logo/i);
    expect(topbarLogoEl).toBeInTheDocument();
})

test("profile picture should be rendered", () => {
    render(<Topbar />);
    const profilePicEl = screen.getByAltText(/Profile picture/i);
    expect(profilePicEl).toBeInTheDocument();
})

test("Add icon should be rendered", () => {
    render(<Topbar />);
    const addIconEl = screen.getByTestId("add-icon");
    expect(addIconEl).toBeInTheDocument();
})

test("Settings icon should be rendered", () => {
    render(<Topbar />);
    const settingsIconEl = screen.getByTestId("settings-icon");
    expect(settingsIconEl).toBeInTheDocument();
})