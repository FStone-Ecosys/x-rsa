import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { toEmbed } from "./embed-url.ts";

describe("toEmbed", () => {
  it("pornhub viewkey", () => {
    assert.deepEqual(toEmbed("https://www.pornhub.com/view_video.php?viewkey=abc123"), {
      source: "pornhub",
      label: "Pornhub",
      embedUrl: "https://www.pornhub.com/embed/abc123",
    });
  });
  it("pornhub without viewkey is rejected", () => {
    assert.equal(toEmbed("https://www.pornhub.com/view_video.php"), null);
    assert.equal(toEmbed("https://www.pornhub.com/model/someone"), null);
  });
  it("xhamster slug-ID", () => {
    assert.equal(
      toEmbed("https://xhamster.com/videos/some-title-here-123456")?.embedUrl,
      "https://xhamster.com/xembed.php?video=123456",
    );
    assert.equal(toEmbed("https://xhamster.com/videos/no-id-here"), null);
  });
  it("xvideos videoID/slug", () => {
    assert.equal(
      toEmbed("https://www.xvideos.com/video98765/some_slug")?.embedUrl,
      "https://www.xvideos.com/embedframe/98765",
    );
    assert.equal(toEmbed("https://www.xvideos.com/tags/foo"), null);
  });
  it("rejects other hosts and lookalikes", () => {
    assert.equal(toEmbed("https://evil.com/view_video.php?viewkey=abc"), null);
    assert.equal(toEmbed("https://pornhub.com.evil.com/view_video.php?viewkey=abc"), null);
    assert.equal(toEmbed("https://notxvideos.com/video1/x"), null);
    assert.equal(toEmbed("javascript:alert(1)"), null);
    assert.equal(toEmbed("not a url"), null);
  });
});
